var net = require('net');
var count = 0;
// var server = net.createServer(function (conn) {
// 	//handle connection
// 	console.log('\033[90m new connection hola !\033[39m');


// });

var server = net.createServer( function (conn){
	conn.write(
		  '\n > welcome to \033[92mnode-chat\033[39m!'
		+ '\n > ' + count + ' other people are connected at this time.'
		+ '\n > please write your name and press enter: ');
	count++;
	//data is a buffer
	//TCP is byte oriented
	conn.on('data', function (data){
		console.log(data);
	});
	conn.on('close', function (){
		count--;
	});
});
server.listen(3000, function (){
	console.log('\033[96m server listening on *:3000\033[39m');
});

//Keep track of connections


