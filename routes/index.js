var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function (req, res, next) {
    res.writeHead(200, {"Content-type" : "text/html;charset=utf-8"});
    res.write("<div style='text-align:center'><h1>天然气管材仓库管理</h1><p>开发者：Jiff <p/><p>2022年4月</p></div>");
    res.end();
    next();
});

module.exports = router;
