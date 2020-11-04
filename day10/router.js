var express = require("express");
var obj=express();

var router = express.Router();


router.get('/',function(req,res){
    res.end("get success")
})

router.post('/',function(req,res){
    res.end("post success")
})

obj.use('/student',router)

obj.listen(3000)

