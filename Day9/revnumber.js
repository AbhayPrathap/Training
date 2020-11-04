var express = require('express');
var obj = express()


obj.get("/revnum/:num", function (req, res) {
    var data = req.params.num
    var reverse = 0
    var reminder
    while (parseInt(data) > 0) {
        reminder = parseInt(data) % 10;
        data = (data)/ 10;
        reverse = reverse * 10 + reminder



    }
    res.send(reverse.toString())
    console.log(reverse)
})

obj.listen(3000);


// a.get("/revnum/:number", function (req, res) {
//     console.log(req.params.number)
//     var num = 0
//     var n
//     var id = req.params.number
//     while (parseInt(id) > 0) {
//         n = parseInt(id) % 10;
//         // console.log(n)
//         id = (id) / 10;
//         console.log(id)
//         num = num * 10 + n
//     }
//     res.send(num.toString())
//     console.log(num)
// })
// a.listen(3000)



