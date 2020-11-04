var express = require('express');
const hotel = require('../service/itemData');
var router = express.Router();


router.get('/get', function (req, res) {
    hotel.getData().then(
        result => {
            res.send(result)
        }
    )

})
router.post('/post', function (req, res) {
    let hid = req.body.id;
    let hitem = req.body.item;
    let hprice = req.body.price;
    hotel.postData(hid, hitem, hprice).then(
        result => {
            res.send(result)
        }
    ).catch(err=>{
        res.send(err)
    })
})



module.exports = router