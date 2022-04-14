var express = require('express');
const jwt = require('../util/jwt');
var router = express.Router();
const db = require('../database/gaspipe');


router.get('/getData', function (req, res, next) {
    const token = req.header('Authorization');
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        res.status(404);
        res.end();
        return next();
    }
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
            next();
        }
    )
})



module.exports = router;
