var express = require ("express");
var router = express.Router();
var sqlConnect = require ('./config/db')



router.get('/',function(req,res){
    sqlConnect.query('select * from school.libdata',function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

router.post('/',function(req,res){
    let sl = req.body.slno;
    let stdid = req.body.std_id;
    let bookid = req.body.book_id;
    
    sqlConnect.query("insert into libdata values (?,?,?)",[sl,stdid,bookid],function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.send("Done")
        }
    })
})

module.exports = router;