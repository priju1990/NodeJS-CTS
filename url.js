var http= require('http')
var url = require('url')


 http.createServer(function (req,res){
    res.writeHead(200,{'Content-type':'text/html'})
    res.write("I am working with URL params now")
    res.write("<br> </br>")
    var myQuery = url.parse(req.url,true).query
    res.write("status :"+ myQuery.status )
    res.write("<br> </br>")
    res.write("task :"+ myQuery.task )
    res.write("<br> </br>")
    console.log(myQuery)
    res.write("<br> </br>")
    res.write("URL ="+req.url)
    res.end()}).listen(8888)

