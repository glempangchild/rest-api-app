var mysql = require('mysql');
// koneksi database

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'node_rest_api'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Mysql terkonek');
});

module.exports = con;