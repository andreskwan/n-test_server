var httpModule = require('http');
var server     = httpModule.createServer(function (req,res){
	res.writeHead(200);
	res.end('Hello Andres');
}).listen(3000);