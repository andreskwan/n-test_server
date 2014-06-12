//module dependencies

var fs = require('fs');
var util = require('util');
//synchronous way
//console.log(fs.readdirSync(__dirname));

//Asynchronous way
function async (err, files) { console.log(files)};
var async = 

fs.readdir('.', async);

console.log("before the asynch() ???");

//err & files is what is returned when the function is executed
//files is an array of files

// console.log('	'+i+'\033[31m \033[39m\n');
var fileExplorer = function (err, files) {
// console.log('	'+i+'\033[31m \033[39m\n');
	console.log('');
	if(!files.length) {
		//colors to the terminal
		return console.log('	\033[31m No files to show!\033[39m\n');
	}
	console.log('	Select which file or directory you want to see\n');
	function file(i) {
		var filename = files[i];	
		var identifyFile = function (err, stat){
			console.log(util.inspect(stat, { showHidden: true, colors: true }));
			// if (stat.isDirectory()) 
			// {
			// 	console.log('	'+i+'\033[31m' + filename + '/\033[39m\n');
			// }else{
			// 	console.log('	'+i+'\033[31m' + filename + '/\033[39m\n');
			// }
			// i++;
			// if (i == files.length) {
			// 	console.log('');
			// 	process.stdout.write('	\033[31m Enter your choice: \033[39m');
			// 	process.stdin.resume();
			// }else{
			// 	file(i);
			// }
		};

		fs.stat(__dirname + '/' + filename, identifyFile);
	}
	file(0);
};

// console.log('Current working directory: ' + process.cwd());
fs.readdir(process.cwd(), fileExplorer);





