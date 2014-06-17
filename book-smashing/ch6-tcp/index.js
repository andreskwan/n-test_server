var net = require('net');
var count = 0;
var server = net.createServer(function (conn) {
	//handle connection
	console.log('\033[90m new connection hola !\033[39m');

});

server.listen(3000, function (){
	console.log('\033[96m server listening on *:3000\033[39m');
});

//Keep track of connections


