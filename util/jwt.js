var jwt = require('jsonwebtoken')
const secret = 'tokenForwareOO'

const token = {
    encrypt: function (data, time) {
        return jwt.sign(data, secret, { expiresIn: time });
    },
    decrypt: function (token) {
        let res = {};
        jwt.verify(token, secret, (err, data) => {
            if( !err ) {
                res = {
                    check: true,
                    data: data
                }
            }
            else {
                res = {
                    check: false,
                    data: ""
                }
            }
        })
        return res;
    }
}

module.exports = token;