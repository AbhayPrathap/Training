var sqlConnect = require('../config/db')
var order = {};

order.getData = () => {
    return new Promise((resolve, reject) => {
        sqlConnect.query('select * from sales', function (err, result) {
            if (err) {
                reject(err)
            }
            else {
                resolve(result)
            }
        })
    })
}

order.postData = (no, sid, quan) => {
    return new Promise((resolve, reject) => {

        sqlConnect.query('insert into sales values (?,?,?)', [no, sid, quan], function (err, result) {
            if (err) {
                reject(err)
            }
            else {
                resolve("done")
            }
        })
    })
}

module.exports = order