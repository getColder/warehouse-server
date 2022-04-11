var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
var warehouseRouter = require('./routes/warehouse');
var permissionRouter = require('./routes/permission');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/warehouse', warehouseRouter);
app.use('/permission', permissionRouter);

module.exports = app;
