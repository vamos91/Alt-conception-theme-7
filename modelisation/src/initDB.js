const mysql = require('mysql2')
var fs = require('fs');

const initDB = () => {
    var con = mysql.createConnection({
        user: 'root',
        password: 'acard',
        host: 'localhost'
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        con.query('DROP DATABASE IF EXISTS hospital')
         con.query("CREATE DATABASE IF NOT EXISTS hospital", function (err, result) {
            if (err) throw err;
            console.log("Database created");
        });
        // fs.readFile(`../drawSQL-mysql-export-2024-04-09.sql`, 'utf8',(err, data) => {
        //     if (err) {
        //         console.log('error', err)
        //     } else {
        //         //...
        //     }
        // })
    });
}

initDB()
