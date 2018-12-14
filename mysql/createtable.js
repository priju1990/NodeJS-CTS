var mysqldb = require('mysql')
var connection = mysqldb.createConnection({
    'host': 'localhost',
    'user':'root',
    'password':'',
    'database':'nodedb'
})

connection.connect(function (err){
    if(err){
        throw err
    }
    else{
        console.log("Connected to mysql server!!")
        console.log("Creating DB...")
        var sql="create table friends (id int(8),name varchar(32),location varchar(32))"

        connection.query(sql,function(err,succ){
            if(err){
                throw err
            }
            else{
                console.log("table created")
            }
        })
       
    }
})