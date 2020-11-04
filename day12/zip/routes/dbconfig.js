var mysql = require ('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'Mission2022@qatar',
    database:"emloyee_register"
})

connection.connect(function(err){
    if (err)throw err
    console.log("success")
})

module.exports = connection