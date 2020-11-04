var express = require("express");
var router = express.Router();
var sqlConnect = require('./config/db');

router.get('/', function (req, res) {


    sqlConnect.query('select * from book', function (err, result) {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})

router.post('/', function (req, res) {
    let bid = req.body.b_id;
    let bname = req.body.b_name;
    let bprice = req.body.b_fine;

    sqlConnect.query('insert into book values (?,?,?)', [bid, bname, bprice], function (err, result) {
        if (err) {
            console.log(err)
        }
        else {
            res.send("Done")
        }
    })
})

module.exports = router