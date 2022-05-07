const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'pma',
    password:'2430',
    database: 'wtaproject'
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
app.get('/createuser',(req,res) =>{
    let sql = 'CREATE TABLE IF NOT EXISTS User(User_id INT,Name VARCHAR(50),Date_of_birth DATE,Pincode VARCHAR(10),Phone VARCHAR(15),Email VARCHAR(50),Password VARCHAR(25),PRIMARY KEY (User_id));'
    db.query(sql,err=>{
        if(err){
            throw err;
        }
        res.send('User table created successfully')
    })
})

//Insert user
app.get('/user',(req, res)=>{
    let user = {User_id:1,Name:'Arjun',Date_of_birth:"2001-12-24",Pincode:'577243',Phone:'8497877929',Email:'arjunag2001@gmail.com',Password:'Arjun123'}
    let sql = 'INSERT INTO User SET ?'
    let query = db.query(sql,user,err=>{
        if(err){
            throw err;
        }
        res.send('User added')
    })
})

//Select users
app.get('/getuser',(req, res)=>{
    let sql = 'SELECT * FROM User'
    let query = db.query(sql,(err,results)=>{
        if(err){
            throw err;
        }
        console.log(results)
        res.send('User details fetched')
    })
})

//Update user
app.get('/updateuser/:id',(req, res)=>{
    let newPhone = '9999900000';
    let sql = `UPDATE User SET Phone = '${newPhone}' WHERE User_id = ${req.params.id}`
    let query = db.query(sql,err=>{
        if(err){
            throw err;
        }
        res.send('User updated')
    })
})

app.listen('3000',()=>{
    console.log('Server started on port 3000')
})

