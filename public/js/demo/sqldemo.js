var config = require('../config');
var mysql = require(config.homePath + '/node_modules/mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'aa123456',
    database: 'mydb'
});
connection.connect();

var sql = 'select * from foo where foo_name = ?';
var fields = ["Tom"];

connection.query(sql, fields, function (error, results) {
    if (error) throw error;
    console.log('------------------------------------------------------');
    console.log(results);
    console.log('------------------------------------------------------\n\n');
});

connection.end();