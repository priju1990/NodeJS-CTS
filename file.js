var http= require('http')
var file = require('fs')
var datatowrite ="Writing this in new file"

var server = http.createServer(function (req,res){
    res.writeHead(200,{'Content-type':'text/html'})
    res.write("working with fs module")
    res.write("<br> </br>")

    file.readFile('hello.txt',function(err,data){
        if(err){
            throw err
        }
        else{
            res.write(data)
        }
        res.end()
    })

    file.writeFile('hello2.txt',datatowrite,function(err){
        throw err
    })
   
}).listen(8888)