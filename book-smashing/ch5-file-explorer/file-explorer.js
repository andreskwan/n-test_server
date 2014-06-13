//module dependencies

var fs   = require('fs');
var util = require('util');
var stdout = process.stdout;
var stdin  = process.stdin;
//synchronous way
//console.log(fs.readdirSync(__dirname));

// //Asynchronous way
// function async (err, files) { console.log(files)};
// var async = fs.readdir('.', async);

// console.log("before the asynch() ???");

// console.log('Current working directory: ' + process.cwd());

//err & files is what is returned when the function is executed
//files is an array of files

// console.log('	'+i+'\033[31m \033[39m\n');
var fileExplorer = function (err, files) {
	// console.log('	'+i+'\033[31m \033[39m\n');
	//console.log('');
	//No files to display
	if(!files.length) 
	{
		//colors to the terminal
		return console.log('	\033[31m No files to show!\033[39m\n');
	}
	console.log('	Select which file or directory you want to see\n');
	var stats = [];

	function file (i) {
		// console.log("file -> files.length: "+files.length);
		var filename = files[i];	
		
		function identifyFile (err, stat){
			// console.log("identify -> files.length: "+files.length);
			stats[i] = stat;
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
				read();
			}else{
				//identify the next file, but how iterates? by recursivity!!!
				file(i);
			}
		}
		//////////////////////////////////////////////////
		fs.stat(__dirname + '/' + filename, identifyFile);
		//////////////////////////////////////////////////
	}
	file(0);
	// console.log("identify -> files.length: "+files.length);
	function read () {
		// console.log("read -> files.length: "+files.length);
		//console.log('');
		stdout.write('	\033[33mEnter your choice: \033[39m');
		//old way to do it
		//how should be done today (2014/06)
		stdin.resume();
		stdin.setEncoding('utf8');
		//read
		stdin.on('data', option);
	}
	function showFileContent (err, data){
		//console.log('');
		console.log('\033[90m' + data.replace(/(.*)/g, ' 	$1') + '\033[39m');
	}
	function directoryContent (err, files){
		//console.log('');
		//why files is not in the scope?? because here files are different
		// console.log("option -> files.length: "+files.length);
		console.log('	(' + files.length + ' files)');
		files.forEach(function (file) {
			console.log('	- 	'+ file);
		});
		//console.log('');
	};
	function option (data) {
		// console.log("option -> files.length: "+files.length);
			var filename = files[Number (data)];
			if (!filename) {
				stdout.write('	\033[31mEnter your choice: \033[39')
			}else{
				stdin.pause();
				if(stats[Number (data)].isDirectory()){
					// console.log("option -> files.length: "+files.length);
					fs.readdir(__dirname + '/' + filename, directoryContent);
				} else {
					////////////////////////////////////////////////////////////////////////////
					fs.readFile(__dirname + '/' + filename, 'utf8' , showFileContent);
					////////////////////////////////////////////////////////////////////////////
				}
			}
		}
};

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
fs.readdir(process.cwd(), fileExplorer);








