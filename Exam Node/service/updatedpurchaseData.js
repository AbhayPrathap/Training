var sqlConnect = require('../config/db')
var ushop = {}
ushop.getData = () => {
    return new Promise((resolve, reject) => {
        sqlConnect.query('select * from updated', function (err, result) {
            if (err) {
                reject(err)
            }
            else {
                resolve(result)
            }
        })
    })
}
ushop.postData = (sid, slabel, stype, sqty, srate, sdate) => {
    return new Promise((resolve, reject) => {

        sqlConnect.query("insert into updated values(?,?,?,?,?,?)", [sid, slabel, stype, sqty, srate, sdate], function (err, result) {
            if (err) {
                reject(err)
            }
            else {
                resolve("done")
            }
        })
    })
}


module.exports = ushop




