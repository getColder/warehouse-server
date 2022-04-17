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
    let db = this;
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
    //出入库模式
    this.stockSchema = mongoose.Schema({
        operate: String,
        operateTime: Date,
        operateItem: String,
        diff: Number,
        remain: Number,
        pcs: String,
        currentGroup: String
    })

    //出入库
    this.manSchema.methods.stockin = function (increment, req, res, next, callback) {
        this.number += increment;
        const _item = this.name;
        const _itemGroup = this.group;
        const _remain = this.number;
        const _pcs = this.pcs;
        let newStock = new db.stockModel({
            operate: "stockin",
            operateTime: new Date().toLocaleString(),
            operateItem: _item,
            diff: increment,
            remain: _remain,
            pcs: _pcs,
            currentGroup: _itemGroup
        });
        newStock.save((err, newItem) => {
            if (err) {
                console.log(console.log(`${new Date().toLocaleString()}\tstockin operation recording\tfailed!`));
                throw err;
            }
        });
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
        const _item = this.name;
        const _itemGroup = this.group;
        const _remain = this.number;
        const _pcs = this.pcs;
        let newStock = new db.stockModel({
            operate: "stockout",
            operateTime: new Date().toLocaleString(),
            operateItem: _item,
            diff: decrement,
            remain: _remain,
            pcs: _pcs,
            currentGroup: _itemGroup
        });
        newStock.save((err, newItem) => {
            if (err) {
                console.log(console.log(`${new Date().toLocaleString()}\tstockout operation recording\tfailed!`));
                throw err;
            }
        });
        this.save((err, updated) => {
            if (err)
                console.log(err)
            console.log(`${new Date().toLocaleString()}\t\tstock-out\t${updated.name}:${updated.number}`);
            callback ? callback(req, res, next) : null;
        });
        return true;
    }
    //统计分组
    this.groupSchema.methods.getNumber = function () {
        let promise = new Promise((resolve, reject) => {
            //遍历对应group所有项目
            let result = Promise.resolve().then(
                () => {
                    let total = 0;
                    return total;
                }
            )
            DbGaspipe().manifest.find({ group: this.label }, (err, item) => {
                if (err)
                    throw err;
                item.forEach(item => {
                    result = result.then(total => {
                        total += item.number;
                        return total;
                    })
                })
                result.then(total => {
                    resolve(total);
                })
            })
        })
        return promise;
    }
    //模型定义
    this.manifest = mongoose.model('manifest', this.manSchema);
    this.groupModel = mongoose.model('groups', this.groupSchema);
    this.stockModel = mongoose.model('stock', this.stockSchema);

    //删除清单
    this.deleteItem = function (item, req, res, next, callback) {
        this.manifest.deleteOne({ name: item }, (err, deleteone) => {
            if (err)
                console.log(err);
            console.log(`${new Date().toLocaleString()}\tdelete\t${item}`);
            callback ? callback(req, res, next) : null;
        })
    }

    //出入库记录清单
    this.getStockListByDate = function (start, end) {
        if (!this.status)
            return 0;
        return this.stockModel.find((err, item) => {
            if (err)
                throw (err);
        })
    }

    this.getStockListByLatest = function (startDay) {
        if (!this.status)
            return 0;
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDate();
        const start = new Date(year,month,day - startDay);
        return this.stockModel.find({ operateTime: { $gt: start} }, (err, item) => {
            if (err)
                throw (err);
        })
    }


    this.getList = function () {
        if (!this.status)
            return 0;
        return this.manifest.find((err, item) => {
            if (err)
                throw (err);
        })
    }

    this.getGroup = async function () {
        let infoPromise = new Promise((resolve, reject) => {
            let numPromise = null;
            this.groupModel.find(async (err, item) => {
                if (err)
                    reject(err);
                //let numPromise = Promise.resolve()
                let infos = [];
                item.forEach((group, index) => {
                    //异步：其中一组的info加入infoArray
                    group.getNumber().then(data => {
                        infos.push({
                            group: group.label,
                            number: data
                        })
                        if (item.length === infos.length)
                            resolve(infos)
                    })
                })
            });
        })
        return infoPromise;
    }

    this.editGroup = function (glist) {
        const promise = new Promise((resolve, reject) => {
            let process = 0;
            for (const key in glist) {
                //所有分组g1、g2、g3
                this.groupModel.find({ name: key }, (err, group) => {
                    const origin = group[0].label;//原分组名
                    const toUpdated = glist[key]; //待修改分组名
                    //所有分组为G_I项目
                    this.manifest.find({ group: origin }, (err, items) => {
                        if (err)
                            throw err;
                        items.forEach(item => {
                            item.group = toUpdated;
                            item.save();
                            console.log(`${new Date().toLocaleString()}\t\tgroup changed\t${origin}->${toUpdated}`);
                        })
                    });
                });
                //procee为异步处理计数
                process++;
            }
            for (const key in glist) {
                this.groupModel.find({ name: key }, function (err, item) {
                    if (err)
                        throw (err);
                    this.saveList = [];
                    item.forEach(group => {
                        group.label = glist[key];
                        group.save((err, result) => {
                            process--;
                            if (process === 0) {
                                saveList.push(result)
                                resolve(saveList);
                            }
                            else {
                                saveList.push(result);
                            }
                        })
                    })/*
                    let listPromise = Promise.resolve();
                    while (saveList.length > 0) {
                        console.log(saveList[0]);
                        listPromise = saveList.pop().then(() => {
                            console.log("O");
                        });
                    }
                    listPromise.then(() => {
                        console.log("X");
                    })*/
                })
            }
        })
        return promise;
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