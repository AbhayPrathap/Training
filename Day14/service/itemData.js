var sqlConnect = require('../config/db')
var hotel = {}
hotel.getData = () => {
    return new Promise((resolve, reject) => {
        sqlConnect.query('select * from item_list', function (err, result) {
            if (err) {
                reject(err)
            }
            else {
                resolve(result)
            }
        })
    })
}
hotel.postData = (hid,hitem,hprice) => {
    return new Promise((resolve, reject) => {
        
        sqlConnect.query("insert into item_list values(?,?,?)", [hid, hitem, hprice], function (err, result) {
            if (err) {
                reject(err)
            }
            else {
                resolve("done")
            }
        })
    })
}

module.exports = hotel




