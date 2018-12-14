var mysqldb = require('mysql')
var connection = mysqldb.createConnection({
    'host': 'localhost',
    'user':'root',
    'password':'',
    'database':'nodedb'
})

connection.connect(function(err){
    if(err){
        throw err
    }
    else {
        console.log("Select queryy")
        var sql="select id,name,location from friends "
        connection.query(sql,function(err,result,fields){
            if(err){
                throw err
            }
            else{
                console.log(JSON.stringify(result))

            }
        })
    }

})