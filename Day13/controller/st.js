var express = require('express');
var router = express.Router();

const getData = require('../service/getData');
router.get('/get', function (req, res) {
    getData().then(
        result=>{
            res.send(result)
        }
    )
    
})

module.exports = router