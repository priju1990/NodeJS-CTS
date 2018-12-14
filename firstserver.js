var httpvariable = require ('http') // similar to imports
const ngrok = require('ngrok');

//creating the server with createserver, passng req and res

var myServer = httpvariable.createServer(callbackfuntion).listen(8888)
function callbackfuntion(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.write("hello from callbackfunction")
    res.end()
}


/*
var myserver = httpvariable.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.write("hello from server")
    res.end()
}).listen(8888)
*/
//myserver.listen(8888)


//this is a self calling function  
/*
(async function() {
  const url = await ngrok.connect();
})();  */