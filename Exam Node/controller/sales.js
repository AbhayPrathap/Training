var express = require('express');
const sale = require('../service/salesData');
var router = express.Router();


router.get('/get', function (req, res) {
    sale.getData().then(
        result => {
            res.send(result)
        }
    )

})
router.post('/post', function (req, res) {
    let sid = req.body.id;
    let slabel = req.body.label;
    let stype = req.body.type;
    let sqty = req.body.qty;
    let srate = req.body.rate;
    sale.postData(sid, slabel, stype, sqty, srate).then(
        result => {
            res.send(result)
        }
    ).catch(err => {
        res.send(err)
    })
})

router.delete('/:id', function (req, res) {
    let sid = req.body.id;
    sale.deleteData(sid).then(
        result => {
            res.send(result)
        }
    ).catch(err => {
        res.send(err)
    })

})

router.get('/remaining_stock', function (req, res) {
    sale.getDatas().then(
        result => {
            res.send(result)
        }
    )

})

router.get('/total_stock', function (req, res) {
    sale.getDatar().then(
        result => {
            res.send(result)
        }
    )

})


module.exports = router