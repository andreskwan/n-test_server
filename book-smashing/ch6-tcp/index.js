var net = require('net');
var users = {};
var count = 0;
// var server = net.createServer(function (conn) {
// 	//handle connection
// 	console.log('\033[90m new connection hola !\033[39m');
// });

var server = net.createServer( function (stream){
	stream.write(
		  '\n > welcome to \033[92mnode-chat\033[39m!'
		+ '\n > ' + count + ' other people are streamected at this time.'
		+ '\n > please write your name and press enter: ');
	count++;
	//data is a buffer
	//TCP is byte oriented
	// stream is a stream
	stream.setEncoding('utf8');
	var nickname;
	stream.on('data', function (data){
		data = data.replace('\r\n', '');
		if(!nickname){
			//to find if the nickname has been already used
			if (users[data]){
				stream.write('\033[93m> nickname already in use. try again:\033[39m ');
				return;
			//to save new nick name
			}else{
				nickname = data;
				//store the user stream
				users[nickname] = stream;
				for (var i in users) {
					users[i].write('\033[90m > ' 
						+ nickname 
						+ ' joined the room\033[39m\n');
				}
			}
		}else{
			//otherwise you consider it a chat message
			for ( var userNick in users) {
				if (userNick != nickname){
					users[userNick].write('\033[96m > ' + nickname + ':\033[39m ' + data + '\n')
				}
			}
		}
		console.log(data);
	});
	stream.on('close', function (){
		count--;
	});
});
server.listen(3000, function (){
	console.log('\033[96m server listening on *:3000\033[39m');
});
//Keep track of connections


