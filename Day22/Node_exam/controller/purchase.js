var express = require('express');
const shop = require('../service/purchaseData');
var router = express.Router();


router.get('/get', function (req, res) {
    shop.getData().then(
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
    let sdate = req.body.date;
    shop.postData(sid, slabel, stype, sqty, srate, sdate).then(
        result => {
            res.send(result)
        }
    ).catch(err => {
        res.send(err)
    })
})

router.put('/:id', function (req, res) {
    let sid = req.body.id;
    let sqty = req.body.qty;
    let sdate = req.body.date;
    shop.putData(sid, sqty, sdate).then(
        result => {
            res.send(result)
        }
    ).catch(err => {
        res.send(err)
    })

})


module.exports = router