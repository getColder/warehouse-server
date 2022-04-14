var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var groupsRouter = require('./routes/groups');
var homeRouter = require('./routes/home');
var warehouseRouter = require('./routes/warehouse');
var permissionRouter = require('./routes/permission');

const db = require('./database/gaspipe');
db.connect();
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((err, req, res, next) => {
    console.log(err);
    next();
})
app.use('/', indexRouter);
app.use('/home', homeRouter);
app.use('/warehouse', warehouseRouter);
app.use('/permission', permissionRouter);
app.use('/groups', groupsRouter);

process.on('uncaughtException', (err) => {
    console.error(`${new Date().toLocaleString()}\terror\t${err}`);
})

module.exports = app;
