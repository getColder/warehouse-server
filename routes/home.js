var express = require('express');
const jwt = require('../util/jwt');
var router = express.Router();



router.get('/getData', function (req, res, next) {
    const token = req.header('Authorization');
    console.log(token);
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        res.status(404);
        res.end();
        return next();
    }
    return next();
})

module.exports = router;
