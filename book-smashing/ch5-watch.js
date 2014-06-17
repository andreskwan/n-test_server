var fs = require('fs');
var stream = fs.createReadStream('file.css');



//get all files in working direcory
var files = fs.readdirSync(process.cwd());
files.forEach(function(file){
	//watch the file if it ends in ".css"
	if (/\.css/.test(file)){
		fs.watchFile(process.cwd() + '/' + file, function() {
			console.log(' - ' + file + ' changed')
		});
	}
});