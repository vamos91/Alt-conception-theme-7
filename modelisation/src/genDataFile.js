const mysql = require('mysql2')
const fs = require('fs')
const tables = ['patients', 'medecins', 'consultations']

try {
    const cnx = mysql.createConnection({
        user: process.env.USER,
        password: process.env.PASSWORD,
        port: process.env.PORT,
        database: process.env.DATABASE,
        host: process.env.HOST
    })
    console.log('Vous êtes connecté à la DB')

    tables.forEach((table) => {
        cnx.query(`select * from ${table}`, (err, result) => {
            if (!err) {
                fs.writeFile(`./data/${table}.json`, JSON.stringify(result, null, 4), "utf8", (err) => {
                    if(err){
                        console.log('error', err)
                    }else{
                        console.log(`${table} file created...`)
                    }
                })
            }
        })
    });
    
} catch (err) {
    console.log(err)
}