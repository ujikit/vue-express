const mysql      = require('mysql');
const connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "vue_express"
});

exports.employee_list = function(req, res){
	var sql 		= "SELECT * FROM employee"; //userID
	connection.query(sql, function  (err_final,rows){
    res.send({ message: rows })
  })
};
