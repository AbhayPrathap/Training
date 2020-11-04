var sqlConnect = require('../config/db')
var shop = {}
shop.getData = () => {
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
shop.postData = (sid, slabel, stype, sqty, srate) => {
    return new Promise((resolve, reject) => {

        sqlConnect.query("insert into sales values(?,?,?,?,?)", [sid, slabel, stype, sqty, srate], function (err, result) {
            if (err) {
                reject(err)
            }
            else {
                resolve("done")
            }
        })
    })
}
shop.deleteData = (sid) => {
    return new Promise((resolve, reject) => {
        sqlConnect.query("delete from sales where id=?", [sid, sqty], function (err, result) {
            if (err) {
                reject(err)
            }
            else {
                resolve("done")
            }
        })
    })
}


shop.getDatas = () => {
    return new Promise((resolve, reject) => {
        sqlConnect.query('select purchase.id ,purchase.label, purchase.qty+updated.uqty-sales.sqty as remaining_stock from sales inner join purchase on sales.sid = purchase.id inner join updated on purchase.id=updated.uid', function (err, result) {
            if (err) {
                reject(err)
            }
            else {
                resolve(result)
            }
        })
    })
}

shop.getDatar = () => {
    return new Promise((resolve, reject) => {
        sqlConnect.query('select purchase.id ,purchase.label, purchase.qty + updated.uqty as total_stock from updated inner join purchase on purchase.id = updated.uid', function (err, result) {
            if (err) {
                reject(err)
            }
            else {
                resolve(result)
            }
        })
    })
}
module.exports = shop




