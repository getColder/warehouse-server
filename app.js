var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
var usersRouter = require('./routes/permission');

var app = express();

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    /*if(req.url !== '/' && req.url !== 'perssion/getMenu')
        res.redirect('/');  //未登录状态或人为访问API定向到SPA页面*/
    next();
})








app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/permission', usersRouter);

module.exports = app;
