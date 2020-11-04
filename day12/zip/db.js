var mysql = require('mysql');
// local mysql db connection
var connection = mysql.createConnection({ host: 'localhost', user: 'root', password: 'Mission2022@qatar', database: 'testdb' });
connection.connect(function (err) { if (err) throw err; console.log("success") });
module.exports = connection;