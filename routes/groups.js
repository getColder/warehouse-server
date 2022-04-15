var express = require('express');
const jwt = require('../util/jwt');
var router = express.Router();
const db = require('../database/gaspipe');
const { reset } = require('colors');

router.get('/getGroupList', function (req, res, next) {
    const token = req.header('Authorization');
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        res.status(404);
        res.end();
        return next();
    }
    let groups = { data: { groupData: {} }, code: 20000 };
    db.getGroupList().then(
        data => {
            data.map((element => {
                let group = { [element.name]: element.label };
                Object.assign(groups.data.groupData, group);
            }))
            res.status(200).send(groups);
            next();
        }
    )
})

router.post('/submitGroupList', function (req, res, next) {
    const token = req.header('Authorization');
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        res.status(404);
        res.end();
        return next();
    }
    let groupInfo = req.body;
    db.editGroup(groupInfo).then((updated) => {
        groupsList = updated.map(element => ({ [element.name]: element.label }));
        let result = {};
        groupsList.forEach(element => {
            Object.assign(result, element)
        });
        let groups = { data: result, code: 20000 };
        res.status(200).send(groups);
        return next();
    })
})

router.get('/getGroup', function (req, res, next) {
    const token = req.header('Authorization');
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        res.status(404);
        res.end();
        return next();
    }
    let groupInfo = { data: { info: [] }, code: 20000 };
    db.getGroup(
    ).then(data => {
        groupInfo.data.info = data;
        res.status(200).send(groupInfo);
        return next();
    })

})

module.exports = router;