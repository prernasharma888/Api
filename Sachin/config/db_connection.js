var mysql = require("mysql");
const util = require("util");
var connection = mysql.createConnection({
    host     :'localhost' ,
    user     : 'root',
    password : '',
    database : 'prerna'
});

connection.connect(function(err){
    if (err) {
        console.error('Error connecting to database:');
    }
    else{
        console.log("connected sucessfully");
    }
});

const query = util.promisify(connection.query).bind(connection);

module.exports = query;
