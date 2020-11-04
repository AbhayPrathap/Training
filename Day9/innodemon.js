var express=require('express');

var app=express()
app.get('/welcome',function(req,res){
    res.send("welcome to get method")
})
app.get('/getem',function(req,res){
    res.send([{ name: 'abhay'},{name:'aja'}])
})
app.get('/wel',function(req,res){
    res.send("20000")
})
app.listen(3000)
