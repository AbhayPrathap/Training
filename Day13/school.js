var express = require('express');
var router = express.Router();
var sqlConnect = require('./config/db')

const getData = require('./controller/getdata')
router.get('/student', function (req, res) {
    getData().then(
        result=>{
            res.send(result)
        }
    )
    
})

router.post('/student', function (req, res) {
    let sid = req.body.s_id;
    let sname = req.body.s_name;
    let sage = req.body.age;
    sqlConnect.query("insert into student values(?,?,?)", [sid, sname, sage], function (err, result) {
        if (err) {
            console.log(err)
        }
        else {
            res.send("done")
        }
    })
})

router.get('/book', function (req, res) {


    sqlConnect.query('select * from book', function (err, result) {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})

router.post('/book', function (req, res) {
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

router.get('/libdata', function (req, res) {
    sqlConnect.query('select * from school.libdata', function (err, result) {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})

router.post('/libdata', function (req, res) {
    let sl = req.body.slno;
    let stdid = req.body.std_id;
    let bookid = req.body.book_id;

    sqlConnect.query("insert into libdata values (?,?,?)", [sl, stdid, bookid], function (err, result) {
        if (err) {
            console.log(err)
        }
        else {
            res.send("Done")
        }
    })
})

router.get('/totalFine', function (req, res) {
    sqlConnect.query('select libdata.std_id,sum(book.b_fine) total_fine from book inner join libdata on book.b_id=libdata.book_id group by libdata.std_id order by libdata.std_id ', function (err, result) {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})

router.get('/totalBookFine',function(req,res){
    sqlConnect.query('select libdata.book_id,book.b_name,sum(book.b_fine) total_book_fine from book inner join libdata on book.b_id = libdata.book_id group by libdata.book_id',function(err,result){
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
module.exports = router
