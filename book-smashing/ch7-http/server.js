var httpModule = require('http');
var server     = httpModule.createServer(function (req,res){
	console.log(req.headers);
	res.writeHead(200,{'Content-Type': 'text/html'});
	
	debugger;
	res.end('Hello <b>World</b>');
}).listen(3000);