var express = require('express');
var obj = express();
var bodyParser = require('body-parser')
obj.use(bodyParser.json())

var student = []
obj.get('/getdata', function (req, res) {
    res.send(student)
})
obj.post('/postdata', function (req, res) {
    student.push(req.body)
    res.send('sending done ')
})

obj.put('/putdata/:id', function (req, res) {
    console.log(req.body)
    student.forEach(result => {
        if (result.id == req.params.id) {
            result.name = req.body.name
        }
    })
    res.send(req.params.id)
})
obj.delete('/deletdata/:id',function(req,res){
    student.forEach((result,key)=>{
        if (result.id == req.params.id){
            student.splice(key,1)
        }
    })
    res.send("done")
})
obj.listen(3000)