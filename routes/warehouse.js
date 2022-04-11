var express = require('express');
const jwt = require('../util/jwt');
var router = express.Router();

router.post('/createItem', function (req, res, next) {
    const token = req.header('Authorization');
    console.log(token);
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        res.status(404);
        res.end();
        return next();
    }
    const itemForm = req.body;
    console.log(itemForm);
    res.json({code: 20000});
    res.status = 200;
    res.end();
    return next();
})

router.post('/updateItem', function (req, res, next) {
    const token = req.header('Authorization');
    console.log(token);
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        res.status(404);
        res.end();
        return next();
    }
    const itemForm = req.body;
    console.log(itemForm);
    res.json({code: 20000});
    res.status = 200;
    res.end();
    return next();
})

router.post('/deleteItem', function (req, res, next) {
    const token = req.header('Authorization');
    console.log(token);
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        res.status(404);
        res.end();
        return next();
    }
    const itemForm = req.body;
    console.log(itemForm);
    res.json({code: 20000});
    res.status = 200;
    res.end();
    return next();
})

router.post('/stock-in', function (req, res, next) {
    const token = req.header('Authorization');
    console.log(token);
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        res.status(404);
        res.end();
        return next();
    }
    const opetationFOrm = req.body;
    console.log(opetationFOrm);
    res.json({code: 20000});
    res.status = 200;
    res.end();
    return next();
})

router.post('/stock-out', function (req, res, next) {
    const token = req.header('Authorization');
    console.log(token);
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        res.status(404);
        res.end();
        return next();
    }
    const opetationFOrm = req.body;
    console.log(opetationFOrm);
    res.json({code: 20000});
    res.status = 200;
    res.end();
    return next();
})

module.exports = router;
