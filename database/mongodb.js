const mongodb = require('mongodb')
// required libs : mongoose | colors
// run the following command
// npm i mongoose colors


const dbURI = "mongodb://47.108.232.221:7200/gas_pipe_data"

const colors = require('colors');
const mongoose = require('mongoose');

function DataBase() {
    this.status = false;
    this.manSchema = mongoose.Schema({
        name: String,
        number: Number,
        pcs: String,
        group: String
    })

    this.manSchema.methods.stockin = function (increment) {
        this.number += increment;
        this.save((err, updated) => { if (err) console.log(err) });
        return this.number;
    }
    this.manSchema.methods.stockout = function (decrement) {
        if (decrement > this.number)
            return -1;
        this.number -= decrement;
        this.save((err, updated) => { if (err) console.log(err) });
        return this.number;
    }

    this.manifest = mongoose.model('manifest', this.manSchema);

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

    this.deleteItem = function (item) {
        this.manifest.deleteMany({ name: item }, (err, res) => {
            if (err)
                console.log(err);
            console.log(res, "已删除！");
        })
    }

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

    this.getList = function () {
        if (!this.status)
            return 0;
        this.manifest.find((err, item) => {
            if (err)
                throw (err);
            else
                console.log(item);
        })

    }

    this.insertItem = function (_name, _number = 0, _pcs = "个", _group = "其他") {
        let newItem = new this.manifest({ name: _name, number: _number, pcs: _pcs, group: _group });
        newItem.save((err, newItem) => {
            if (err)
                throw err;
            console.log(newItem)
        })
    }

    this.editItem = function (_oldname,newObject) {
        this.manifest.find({ name: _oldname }, (err, item) => {
            if (err)
                throw (err);
            item.forEach(item => {
                item.name = newObject._name;
                item.number = newObject._number;
                item.pcs = newObject._pcs;
                item.group = newObject._group;
                item.save((err, newItem) => {
                    if (err)
                        throw err;
                    console.log(newItem);
                })
            })
        })
    }
}



module.exports = DataBase; 