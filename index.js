const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'pma',
    password:'2430'
})

//Connect to MySQL
db.connect(err =>{
    if(err){
        throw err;
    }
    console.log('Connected to MySQL')
})

const app = express()

//Create database
app.get('/createdb',(req,res) =>{
    let sql = 'CREATE DATABASE IF NOT EXISTS wtaproject';
    db.query(sql,err =>{
        if(err){
            throw err;
        }
        res.send('Database created successfully')
    });
});

//Create table


app.listen('3000',()=>{
    console.log('Server started on port 3000')
})

