var express = require('express');
var router = express.Router();
var sqlConnect = require('./dbconfig')

router.get('/', function (req, res) {
    sqlConnect.query("select * from department", function (err, result) {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})
router.post('/', function (req, res) {
    let i = req.body.d_id
    let dep = req.body.d_name
    sqlConnect.query("insert into department values(?,?)", [i, dep], function (err, result) {
        if (err) {
            console.log(err)
        }
        else {
            res.send("done")
        }
    })
})


router.put('/:d_id', function (req, res) {
    let id = req.params.d_id;
    let employee_name = req.body.d_name;
    sqlConnect.query("update department value set d_name=? where d_id=?", [employee_name, id], function (err, result) {
        if (err) {
            console.log(err)
        }
        else {
            res.send("sucess")
        }
    })
})

router.delete('/:id', function (req, res) {
    let id = req.params.id
    sqlConnect.query("delete from company where id=?", [id], function (err, result) {
 
        if (err) {
            console.log(err)
        }
        else {
            res.send("Successfull")
        }
    })
})



module.exports = router;