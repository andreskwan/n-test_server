var httpModule = require('http');
var server     = httpModule.createServer(function (req,res){
	console.log(req.headers);
	res.writeHead(200,{'Content-Type': 'image/jpeg'});
	var stream = require('fs').createReadStream('image.jpg');
	stream.on('data', function (data) {
		res.write(data);
	});
	// debugger;
	res.end();
}).listen(3000);