const mysql = require('mysql2')
const { faker } = require('@faker-js/faker')

const NB_MAX_USERS = 20;

try {
    const cnx = mysql.createConnection({
        user: process.env.USER,
        password: process.env.PASSWORD,
        port: process.env.PORT,
        database: process.env.DATABASE,
        host: process.env.HOST
    })
    console.log('Vous êtes connecté à la DB')

    for (let index = 0; index < NB_MAX_USERS; index++) {
        cnx.query('insert into patients (first_name, last_name, num_secu, entrance_at, emergency, created_at, updated_at) values (?, ?, ?, ?, ?, ?, ?)'
            , [faker.person.firstName(), faker.person.lastName(), faker.finance.creditCardNumber(),faker.date.recent(), faker.datatype.boolean(), faker.date.past(), faker.date.past()]
            , (err, result) => {
                if (err) {
                    console.log(err)
                }
            })

        cnx.query('insert into doctors (first_name, last_name, speciality, permanence, created_at, updated_at) values (?, ?, ?, ?, ?, ?)'
            , [faker.person.firstName(), faker.person.lastName(), Math.floor(Math.random() * (5 - 1) + 1), Math.floor(Math.random() * (2 - 1) + 1), faker.date.past(), faker.date.past()]
            , (err, result) => {
                if (err) {
                    console.log(err)
                }
            })
    }
   
    for (let index = 0; index < 10; index++) {
        cnx.query('insert into consultations (date, diagnostic, rate , patient_id, doctor_id, created_at, updated_at) values (?, ?, ?, ?, ?, ?, ?)'
            , [faker.date.soon(), faker.lorem.paragraphs(), faker.number.float({ min: 20, max: 100, multipleOf: 0.02 }), Math.floor(Math.random() * (20 - 1) + 1), Math.floor(Math.random() * (20 - 1) + 1), faker.date.past(), faker.date.past()]
            , (err, result) => {
                if (err) {
                    console.log(err)
                }
            })
    }
        
   
} catch (err) {
    console.log(err)
}