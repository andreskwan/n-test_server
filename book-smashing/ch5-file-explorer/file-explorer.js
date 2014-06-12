//module dependencies

var fs   = require('fs');
var util = require('util');
//synchronous way
//console.log(fs.readdirSync(__dirname));

// //Asynchronous way
// function async (err, files) { console.log(files)};
// var async = fs.readdir('.', async);

// console.log("before the asynch() ???");

// console.log('Current working directory: ' + process.cwd());

fs.readdir(process.cwd(), function (err, files) {
	// console.log('	'+i+'\033[31m \033[39m\n');
	console.log('');
	//No files to display
	if(!files.length) {
		//colors to the terminal
		return console.log('	\033[31m No files to show!\033[39m\n');
	}

	console.log('	Select which file or directory you want to see\n');

	function file(i) {
		var filename = files[i];	
		
		fs.stat(__dirname + '/' + filename, function (err, stat){
			// console.log(util.inspect(stat, { showHidden: true, colors: true }));
			if (stat.isDirectory()) 
			{
				console.log('	'+i+'\033[36m ' + filename + '/\033[39m\n');
			}else{
				console.log('	'+i+'\033[90m ' + filename + '\033[39m\n');
			}
			i++;
			//i represents the index of the file
			if (i == files.length) {
				console.log('');
				process.stdout.write('	\033[31m Enter your choice: \033[39m');
				//old way to do it
				//how should be done today (2014/06)
				process.stdin.resume();
			}else{
				//identify the next file, but how iterates? by recursivity!!!
				file(i);
			}
		});
	}
	file(0);

});







