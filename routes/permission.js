var express = require('express');
var router = express.Router();
const jwt = require("../util/jwt")
/* GET users listing. */
let users = [
    {
        name: 'admin',
        password: 'ycz0851ww',
        role: 'admin'
    },
    {
        name: 'user',
        password: '0851www',
        role: 'user'
    }
]


router.post('/getMenu', function (req, res, next) {
    
    const token = req.header('authorization');
    const theUser = req.body;
    if (!token || !jwt.decrypt(token).check) {
        //首次登陆或token验证失败
        const id = verify(theUser.username, theUser.password);
        if (id.status < 0) {
            //登陆失败
            res.status(401).send(id.status);
            res.end();
            return next();
        }
        const auth = jwt.encrypt({ _id: theUser.username }, "2d");
        res.setHeader('authorization',auth);
        res.send(getMenu(id.role)); //登录成功！
        return next();
    }
    else{
        const userInfo = users.filter(value => (value.name === theUser.username))[0];
        const menu = getMenu(userInfo ? userInfo.role : "none");
        //登录
        res.send(menu); //登录验证
        return next();
    }
});


function verify(username, password) {
    let verifyUser = {};
    const userExisted = users.some((value, index, array) => {
        if (value.name === username) {
            verifyUser = value;
            return true;
        }
    })
    if (!userExisted) {
        //res.send('<h1>用户不存在！<h1>');
        return {
            status: "-1",
            role: 'none'
        }
    }
    else {
        if (password === verifyUser.password) {
            //res.send('登录成功！');
            return {
                status: "0",
                role: verifyUser.role
            }
        }
        else {
            //res.send('密码错误!');
            return {
                status: "-2",
                role: 'none'
            }
        }
    }
}

function getMenu(role) {
    if (role === 'admin')
        return {
            code: 20000,
            menu: [
                {
                    path: "/home",
                    name: "home",
                    label: "首页",
                    icon: "s-home",
                    url: "home/index",
                },
                {
                    path: "/warehouse",
                    name: "warehouse",
                    label: "仓库",
                    icon: "s-shop",
                    url: "warehouse/index",
                },
                {
                    path: "/user",
                    name: "user",
                    label: "用户管理",
                    icon: "user",
                    url: "user/index",
                },
                {
                    label: "其他",
                    icon: "tickets",
                    children: [
                        {
                            path: "/stock-record",
                            name: "stock-record1",
                            label: "出入库记录",
                            icon: "setting",
                            url: "other/stock-record",
                        },
                        {
                            path: "/other",
                            name: "other",
                            label: "其他",
                            icon: "setting",
                            url: "other/page",
                        },
                    ],
                },
            ],
        }
    else if (role === 'user') {
        return {
            code: 20000,
            token: 125553,
            menu: [
                {
                    path: "/home",
                    name: "home",
                    label: "首页",
                    icon: "s-home",
                    url: "home/index",
                }
            ],
        }
    }
    else {
        return {};
    }
}

module.exports = router;