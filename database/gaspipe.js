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
    //模式
    this.manSchema = mongoose.Schema({
        name: String,
        number: Number,
        pcs: String,
        group: String
    })

    //出入库
    this.manSchema.methods.stockin = function (increment) {
        this.number += increment;
        this.save((err, updated) => {
            if (err)
                console.log(err)
            console.log(`${new Date().toLocaleString()}\t\tstock in\t${updated.name}:${updated.number}`);
        });
        return true;
    }
    this.manSchema.methods.stockout = function (decrement) {
        if (decrement > this.number)
            return false;
        this.number -= decrement;
        this.save((err, updated) => {
            if (err)
                console.log(err)
            console.log(`${new Date().toLocaleString()}\t\tstock out\t${updated.name}:${updated.number}`);
        });
        return true;
    }
    //清单模型
    this.manifest = mongoose.model('manifest', this.manSchema);
    //出入库方法
    this.stock = function (item, number, type = "stockin") {
        this.manifest.find({ name: item }, (err, docs) => {
            if (err)
                console.log(err);
            docs.forEach(one => {
                if (type === "stockin") {
                    console.log(one.stockin(number));
                } else if (type === "stockout") {
                    console.log(one.stockout(number));
                }
            });
        })
    }
    //删除清单
    this.deleteItem = function (item) {
        this.manifest.deleteOne({ name: item }, (err, res) => {
            if (err)
                console.log(err);
            console.log(`${new Date().toLocaleString()}\tdelete\t${item}`);
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

    this.findOne = async function (_name) {
        if (!this.status)
            return 0;
        return await this.manifest.findOne({ name: _name }, (err, item) => {
            if (err)
                throw (err);
        })

    }

    this.insertItem = function (_name, _number = 0, _pcs = "个", _group = "其他") {
        let newItem = new this.manifest({ name: _name, number: _number, pcs: _pcs, group: _group });
        newItem.save((err, newItem) => {
            if (err) {
                console.log(console.log(`${new Date().toLocaleString()}\tinsert\tfailed!`));
                throw err;
            }
            console.log(`${new Date().toLocaleString()}\tinsert\t${newItem}`);
        });
    }

    this.editItem = function (_oldname, newObject) {
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
                })
            })
        })
    }
}



module.exports = DbGaspipe();