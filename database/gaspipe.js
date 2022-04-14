const mongodb = require('mongodb')
// required libs : mongoose | colors
// run the following command
// npm i mongoose colors


const dbURI = "mongodb://47.108.232.221:7200/gas_pipe_data"

const colors = require('colors');
const mongoose = require('mongoose');

const DbGaspipe = (function () {
    return function () {
        if (!DataBase.instance)
            DataBase.instance = new DataBase();
        return DataBase.instance;
    }
})()

function DataBase() {

    this.status = false;    //连接状态
    //连接数据库
    this.connect = function () {
        mongoose.connect(dbURI, {
            auth: { "authSource": "admin" },
            user: "jiff",
            pass: "*5555",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then((res) => {
                console.log('> Connected...'.bgCyan);
                this.status = true;
            })
            .catch(err => console.log(`> Error while connecting to mongoDB : ${err.message}`.underline.red))
    }
    //清单模式
    this.manSchema = mongoose.Schema({
        name: String,
        number: Number,
        pcs: String,
        group: String
    })
    //分组模式
    this.groupSchema = mongoose.Schema({
        name: String,
        label: String
    })
    //分组改名
    this.groupSchema.methods.stockin = function (newLabel, req, res, next, callback) {
        let oldLabel = this.label;
        this.label = newLabel;
        this.save(err, updated => {
            if (err)
                console.log(err)
            console.log(`${new Date().toLocaleString()}\t\tgroup changed\t${oldLabel}->${updated.number}`);
            callback ? callback(req, res, next) : null;
        })
    }


    //出入库
    this.manSchema.methods.stockin = function (increment, req, res, next, callback) {
        this.number += increment;
        this.save((err, updated) => {
            if (err)
                console.log(err)
            console.log(`${new Date().toLocaleString()}\t\tstock-in\t${updated.name}:${updated.number}`);
            callback ? callback(req, res, next) : null;
        });
        return true;
    }
    this.manSchema.methods.stockout = function (decrement, req, res, next, callback) {
        if (decrement > this.number)
            return false;
        this.number -= decrement;
        this.save((err, updated) => {
            if (err)
                console.log(err)
            console.log(`${new Date().toLocaleString()}\t\tstock-out\t${updated.name}:${updated.number}`);
            callback ? callback(req, res, next) : null;
        });
        return true;
    }
    //统计分组
    this.groupSchema.methods.getNumber = () => {
        //遍历对应group所有项目
        return new Promise((resolve, rejected) => {
            let total = 0;
            this.manifest.find({ group: 'g2' }, (err, item) => {
                if (err)
                    throw err;
                item.forEach(item => {
                    total += item.number;
                })
                resolve({
                    group: this.label,
                    number: total
                })
            })
        })
    }
    //模型定义
    this.manifest = mongoose.model('manifest', this.manSchema);
    this.groupModel = mongoose.model('groups', this.groupSchema);

    //删除清单
    this.deleteItem = function (item, req, res, next, callback) {
        this.manifest.deleteOne({ name: item }, (err, deleteone) => {
            if (err)
                console.log(err);
            console.log(`${new Date().toLocaleString()}\tdelete\t${item}`);
            callback ? callback(req, res, next) : null;
        })
    }

    this.getList = async function () {
        if (!this.status)
            return 0;
        return await this.manifest.find((err, item) => {
            if (err)
                throw (err);
        })
    }

    this.getGroup = async function (callback) {
        return new Promise((resolve, rejected) => {
            if (!this.status)
                return 0;
            this.groupModel.find((err, item) => {
                //遍历每一个组的total
                if (err)
                    console.log(err);
                let big = [];
                item.forEach(group => {
                    group.getNumber().then(data => {
                        big.push(data);
                    })
                })
                resolve(big);
            })
        })
    }

    this.getGroupList = async function () {
        if (!this.status)
            return 0;
        return await this.groupModel.find((err, item) => {
            if (err)
                throw (err);
        })
    }

    this.findOne = async function (_name) {
        if (!this.status)
            return 0;
        return await this.manifest.findOne({ name: _name }, (err, item) => {
            if (err)
                throw (err);
        })

    }

    this.insertItem = function (_newItem, req, res, next, callback) {
        let newItem = new this.manifest({
            name: _newItem.name,
            number: _newItem.number,
            pcs: _newItem.pcs,
            group: _newItem.group
        });
        newItem.save((err, newItem) => {
            if (err) {
                console.log(console.log(`${new Date().toLocaleString()}\tinsert\tfailed!`));
                throw err;
            }
            console.log(`${new Date().toLocaleString()}\tinsert\t${newItem}`);
            callback ? callback(req, res, next) : null;
        });
    }

    this.editItem = function (_oldname, newObject, req, res, next, callback) {
        this.manifest.find({ name: _oldname }, (err, item) => {
            if (err)
                throw (err);
            item.forEach(item => {
                item.name = newObject.name;
                item.number = newObject.number;
                item.pcs = newObject.pcs;
                item.group = newObject.group;
                item.save((err, newItem) => {
                    if (err)
                        throw err;
                    console.log(`${new Date().toLocaleString()}\tupdate\t${newItem}`);
                    callback ? callback(req, res, next) : null;
                })
            })
        })
    }
}



module.exports = DbGaspipe();