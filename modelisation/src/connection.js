const mysql = require('mysql2')

console.log('user', process.env.USER)
try {
    const cnx = mysql.createConnection({
        user: process.env.USER,
        password: process.env.PASSWORD,
        port: process.env.PORT,
        database: process.env.DATABASE,
        host: process.env.HOST
    })
    console.log('Vous êtes connecté à la DB')

} catch (error) {
    console.log(error)
}
