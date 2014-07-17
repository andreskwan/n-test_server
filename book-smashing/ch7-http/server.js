var httpModule = require('http');
var server     = httpModule.createServer(function (req,res){
	res.writeHead(200,{ 'Content-Type': 'text/html'});
	debugger;
	res.end('Hello <b>Andres</b>');
}).listen(3000);