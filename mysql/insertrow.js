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
        var sql="insert into friends (id,name,location) values (2,'Jai','del')"

        connection.query(sql,function(err,succ){
            if(err){
                throw err
            }
            else{
                console.log("row inserted")
            }
        })
       
    }
})