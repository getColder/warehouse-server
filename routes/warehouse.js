var express = require('express');
const jwt = require('../util/jwt');
var router = express.Router();
const db = require('../database/gaspipe');

router.post('/createItem', function (req, res, next) {
    const token = req.header('Authorization');
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        res.status(403);
        res.end();
        return next();
    }
    const itemForm = req.body;
    try {
        db.findOne(itemForm.name).then(data => {
            if (data !== null) {
                res.status(200).send({ code: 20001 });
                return next();
            }
            else {
                if(!itemForm.name || itemForm.name === ""){
                    res.status(200).send({ code: 20002, msg: error });
                    return next();
                }
                let newItem = {
                    name : itemForm.name,
                    number: itemForm.number,
                    pcs: itemForm.pcs,
                    group: itemForm.group
                }
                db.insertItem(newItem, itemForm.note, req, res, next, returnTable);
                return;
            }
        })
    } catch (error) {
        res.status(200).send({ code: 20002, msg: error });
        return next();
    }
})

router.post('/updateItem', function (req, res, next) {
    const token = req.header('Authorization');
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        res.status(403);
        res.end();
        return next();
    }
    const itemForm = req.body;
    try {
        db.findOne(itemForm.oldName).then(data => {
            if (data === null) {
                res.status(200).send({ code: 20001 });
                return next();
            }
            else {
                db.editItem(itemForm.oldName, itemForm, itemForm.note, req, res, next, returnTable, returnTable);
            }
        })
    } catch (error) {
        res.status(200).send({ code: 20002, msg: error });
        return next();
    }
})



router.post('/deleteItem', function (req, res, next) {
    const token = req.header('Authorization');
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        res.status(403);
        res.end();
        return next();
    }
    const itemForm = req.body;
    try {
        db.findOne(itemForm.name).then(data => {
            if (data === null) {
                res.status(200).send({ code: 20001 });
                return next();
            }
            else
                db.deleteItem(itemForm.name, itemForm.note, req, res, next, returnTable);
        })
    } catch (error) {
        res.status(200).send({ code: 20002, msg: error });
        return next();
    }
})

router.post('/stock-in', function (req, res, next) {
    const token = req.header('Authorization');
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        res.status(404);
        res.end();
        return next();
    }
    const itemForm = req.body;
    try {
        db.findOne(itemForm.name).then(data => {
            if (data === null) {
                res.status(200).send({ code: 20001 });
                return next();
            }
            else {
                data.stockin({increment: itemForm.mount, note: itemForm.note}, req, res, next, returnTable);
                return
            }
        })
    } catch (error) {
        res.status(200).send({ code: 20002, msg: error });
        return next();
    }
})

router.post('/stock-out', function (req, res, next) {
    const token = req.header('Authorization');
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        res.status(404);
        res.end();
        return next();
    }
    const itemForm = req.body;
    try {
        db.findOne(itemForm.name).then(data => {
            if (data === null) {
                res.status(200).send({ code: 20001 });
                return next();
            }
            else {
                if (data.stockout({decrement: itemForm.mount, note: itemForm.note}, req, res, next, returnTable)) {
                    return;
                }
                res.status(200).send({ code: 20002 });
                return next();
            }
        })
    } catch (error) {
        res.status(200).send({ code: 20003, msg: error });
        return next();
    }
})


const returnTable = (req, res, next) => {
    let list = { data: { tableData: [] }, code: 20000 };
    db.getList().then(
        data => {
            list.data.tableData = data.map((element => {
                return {
                    name: element.name,
                    number: element.number,
                    pcs: element.pcs,
                    group: element.group
                }
            }))
            res.status(200).send(list);
            return next();
        }
    )
}

module.exports = router;
