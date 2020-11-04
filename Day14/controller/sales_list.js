var express = require('express');
var router = express.Router();
var order = require('../service/orderData');


router.get('/get', function (req, res) {
    order.getData().then(
        result => {
            res.send(result)
        })
})

router.post('/post',function(req,res){
    let no = req.body.slno;
    let sid = req.body.item_id;
    let quan = req.body.quantity;
    order.postData(no,sid,quan).then(
        result =>{
            res.send(result)
        }
    ).catch(err=>{
        res.send(err)
    })
})

module.exports = router