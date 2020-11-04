var express = require("express");
var router = express.Router();
var student = []
router.get('/', function (req, res) {
    res.send(student)
})
router.post('/', function (req, res) {
    student.push(req.body)
    res.send('sending done ')
})

router.put('/:id', function (req, res) {
    console.log(req.body)
    student.forEach(result => {
        if (result.id == req.params.id) {
            result.name = req.body.name
        }
    })
    res.send(req.params.id)
})
router.delete('/:id',function(req,res){
    student.forEach((result,key)=>{
        if (result.id == req.params.id){
            student.splice(key,1)
        }
    })
    res.send("done")
})

module.exports = router