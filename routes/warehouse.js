var express = require('express');
const jwt = require('../util/jwt');
var router = express.Router();
const db = require('../database/gaspipe');

router.post('/createItem', function (req, res, next) {
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
            if (data !== null) {
                res.status(200).send({ code: 20001 });
                return next();
            }
            else {
                db.insertItem(itemForm.name, itemForm.number, itemForm.pcs, itemForm.group);
                res.status(200).send({ code: 20000 });
                return next();
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
        res.status(404);
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
                db.editItem(itemForm.oldName, itemForm);
                res.status(200).send({ code: 20000 });
                return next();
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
                db.deleteItem(itemForm.name);
                res.status(200).send({ code: 20000 });
                return next();
            }
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
                data.stockin(itemForm.mount);
                res.status(200).send({ code: 20000 });
                return next();
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
                if (data.stockout(itemForm.mount)) {
                    res.status(200).send({ code: 20000 });
                    return next();
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

module.exports = router;
