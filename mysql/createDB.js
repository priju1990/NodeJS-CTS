var mysqldb = require('mysql')
var connection = mysqldb.createConnection({
    'host': 'localhost',
    'user':'root',
    'password':''
})

connection.connect(function (err){
    if(err){
        throw err
    }
    else{
        console.log("Connected to mysql server!!")
        console.log("Creating DB...")
        connection.query("create database nodedb",function(err,succ){
            if(err){
                throw err
            }
            else{
                console.log("Database created")
            }
        })
    }
})