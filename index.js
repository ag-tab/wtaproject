const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');
//Create connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'pma',
//     password:'2430',
//     database: 'wtaproject'
// })

// //Connect to MySQL
// db.connect(err =>{
//     if(err){
//         throw err;
//     }
//     console.log('Connected to MySQL')
// })

var user_id=1;

const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(express.static("views"))
// app.set('views', __dirname + '/');
// app.engine('html', engines.mustache);
// app.set('view engine', 'html');
//Home page
app.get('/',(req,res) =>{
    // res.sendFile(path.join(__dirname,'/mainpage.html'));
    res.sendFile(__dirname+'/mainpage.html');

})
app.get('/mainpage.html',(req,res) =>{
    res.sendFile(__dirname+'/mainpage.html');
})

//Gallery page
app.get('/gallery.html',(req,res) =>{
    res.sendFile(__dirname+'/gallery.html');
})

//Match section
app.get('/mainpage.html#matchmaking',(req,res)=>{
    res.sendFile(__dirname+'/mainpage.html#matchmaking');
})

//Products page
app.get('/store.html',(req,res) =>{
    res.sendFile(__dirname+'/store.html');
})

//Cart page
app.get('/store.html#Cartdiv',(req,res) =>{
    res.sendFile(__dirname+'/store.html#Cartdiv');
})

//Payment page
app.get('/payment.html',(req,res) =>{
    res.sendFile(__dirname+'/payment.html');
})

//Login page
app.get('/login.html',(req,res) =>{
    res.sendFile(__dirname+'/login.html');
})

//Profile page
app.get('/profile.html',(req,res) =>{
    let sql = 'SELECT * FROM User'
    let query = db.query(sql,(err,results)=>{
        if(err){
            throw err;
        }
    var i = user_id-1;    
    var user_name=results[i].Name;
    var phone=results[i].Phone;
    var email=results[i].Email;
    var pin=results[i].Pincode;
    var state=results[i].State;
    var state_pin = state +","+ pin;
    res.render('profile',{User_name:user_name,Phone_number:phone,Email:email,State_pin:state_pin});

        // console.log(results)
        // res.send('User details fetched')
    })
})

app.post('/profile.html',(req, res) => {
    user_id = req.params.user_id;
    res.redirect("/profile.html");
})

//Create database
// app.get('/createdb',(req,res) =>{
//     let sql = 'CREATE DATABASE IF NOT EXISTS wtaproject';
//     db.query(sql,err =>{
//         if(err){
//             throw err;
//         }
//         res.send('Database created successfully')
//     });
// });

// //Create table
// app.get('/createuser',(req,res) =>{
//     let sql = 'CREATE TABLE IF NOT EXISTS User(User_id INT,Name VARCHAR(50),Date_of_birth DATE,Pincode VARCHAR(10),Phone VARCHAR(15),Email VARCHAR(50),Password VARCHAR(25),PRIMARY KEY (User_id));'
//     db.query(sql,err=>{
//         if(err){
//             throw err;
//         }
//         res.send('User table created successfully')
//     })
// })

// //Insert user
// app.get('/user',(req, res)=>{
//     let user = {User_id:1,Name:'Arjun',Date_of_birth:"2001-12-24",Pincode:'577243',Phone:'8497877929',Email:'arjunag2001@gmail.com',Password:'Arjun123'}
//     let sql = 'INSERT INTO User SET ?'
//     let query = db.query(sql,user,err=>{
//         if(err){
//             throw err;
//         }
//         res.send('User added')
//     })
// })

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

// //Update user
// app.get('/updateuser/:id',(req, res)=>{
//     let newPhone = '9999900000';
//     let sql = `UPDATE User SET Phone = '${newPhone}' WHERE User_id = ${req.params.id}`
//     let query = db.query(sql,err=>{
//         if(err){
//             throw err;
//         }
//         res.send('User updated')
//     })
// })

app.listen('3000',()=>{
    console.log('Server started on port 3000')
})