var express = require('express');
const jwt = require('../util/jwt');
var router = express.Router();
const db = require('../database/gaspipe');
const { get } = require('mongoose');

router.post('/get-list-by-date', function (req, res, next) {
    const token = req.header('Authorization');
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        res.status(404);
        res.end();
        return next();
    }
    const itemForm = req.body;
    //test start&end
    let start = end = new Date();
    let stockList = { data: { tableData: [] }, code: 20000 };
    db.getStockListByDate(start, end).then(data => {
        stockList.data.tableData = data.map(stockRecord => ({
            name: stockRecord.operateItem,
            operate: stockRecord.operate,
            time: stockRecord.operateTime,
            number: stockRecord.diff,
            remain: stockRecord.remain,
            pcs: stockRecord.pcs,
            group: stockRecord.currentGroup,
            note: stockRecord.note
        }))
        res.send(stockList);
        return next();
    })
})

router.get('/get-list-by-latest', function (req, res, next) {
    db.getStockListByLatest(req.query.drange).then(data => {
        const referDate = getDateAtZero(new Date());
        const maxOffSet = 6;   
         //对比和当日的时间天数差 , maxOffset - offset可映射到index
        let inCount = new Array(7).fill(0);
        let outCount = new Array(7).fill(0);
        const stockin = data.filter(value => {
            return value.operate === "stockin";
        }).map(record => {
            try {
                const index = maxOffSet - ( referDate.getDate() - getDateAtZero(record.operateTime).getDate());
                inCount[index]+= record.diff;
            } catch (error) {
                console.error(error);
            }
        })
        const stockout = data.filter(value => {
            return value.operate === "stockout";
        }).map(record => {
            try {
                const index = maxOffSet - ( referDate.getDate() - getDateAtZero(record.operateTime).getDate());
                outCount[index]+=record.diff;
            } catch (error) {
                console.error(error);
            }
        })
        let stockList = { data: { in: inCount, out: outCount }, code: 20000 };
        res.status(200).send(stockList);
        return next();
    })
})

function getDateAtZero(date){
    if(!date instanceof Date){
        throw "typeof date";
    }
    const theDay = date.getDate();
    const theMonth = date.getMonth();
    const theYear = date.getFullYear();
    return new Date(theYear,theMonth,theDay);
}


module.exports = router;