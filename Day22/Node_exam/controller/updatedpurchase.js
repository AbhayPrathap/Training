var express = require('express');
const shop = require('../service/updatedpurchaseData');
var router = express.Router();


router.get('/get', function (req, res) {
    shop.getData().then(
        result => {
            res.send(result)
        }
    )

})
router.post('/post', function (req, res) {
    let sid = req.body.uid;
    let slabel = req.body.ulabel;
    let stype = req.body.utype;
    let sqty = req.body.uqty;
    let srate = req.body.urate;
    let sdate = req.body.udate;
    shop.postData(sid, slabel, stype, sqty, srate, sdate).then(
        result => {
            res.send(result)
        }
    ).catch(err => {
        res.send(err)
    })
})



module.exports = router