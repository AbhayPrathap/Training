var sqlConnect = require('../config/db')
var shop = {}
shop.getData = () => {
    return new Promise((resolve, reject) => {
        sqlConnect.query('select * from purchase', function (err, result) {
            if (err) {
                reject(err)
            }
            else {
                resolve(result)
            }
        })
    })
}
shop.postData = (sid, slabel, stype, sqty, srate, sdate) => {
    return new Promise((resolve, reject) => {

        sqlConnect.query("insert into purchase values(?,?,?,?,?,?)", [sid, slabel, stype, sqty, srate, sdate], function (err, result) {
            if (err) {
                reject(err)
            }
            else {
                resolve("done")
            }
        })
    })
}
shop.putData = (sid, sqty, sdate) => {
    return new Promise((resolve, reject) => {
        sqlConnect.query("update purchase value set sqty=?  where sid=?", [sid, sqty], function (err, result) {
            if (err) {
                resolve(err)
            }
            else {
                reject("done")
            }
        })
    })
}

module.exports = shop




