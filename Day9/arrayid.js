var express = require('express');
var obj = express()
var list = [{
    id: 1,
    jobcode:20,
    salary: 20000,
    name: 'abhay',
},
{
    id: 2,
    jobcode:5,
    salary:15000,
    name: 'ajay',

}]
obj.get("/employee", function (req, res) {
    res.send(list)
})

obj.get("/employee/:id", function (req, res) {
    let employee = list.filter(res => res.id == req.params.id)
    res.send(employee)
})
obj.get("/employee/:jobcode/salary/:salary",function(req,res){
    let mnn = list.filter(res=>res.jobcode == req.params.jobcode && res.salary>req.params.salary)
    res.send(mnn)
})
obj.listen(3500)