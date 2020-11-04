var express = require ('express');
var router = express.Router();
var daily = require('../service/dailyData');

router.get('/get',function(req,res){
    daily.getData().then(
        result=>{
                res.send(result)
        }
    )
})

router.post('/post',function(req,res){
    let no = req.body.slno;
    let did = req.body.item_id;
    let quan = req.body.quantity;
    daily.postData(no,did,quan).then(
        result=>{
            res.send(result)
        }
    ).catch(err=>{
        res.send(err)
    })
})

module.exports = router