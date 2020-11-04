var express= require('express');
var obj = express()

obj.get('/Hi',function(req,res){
    res.send("Hi all to postman")
})
obj.listen(3000)

app.get('/welcome',function(req,res){
    res.send("welcome to get method")
})
app.listen(3000)
