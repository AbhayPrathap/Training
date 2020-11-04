var express = require("express");
var obj=express();

var bodyParser = require('body-parser')
obj.use(bodyParser.json())

var router1 = require('./exportfile.js')
obj.use('/com',router1)

obj.listen(3000)