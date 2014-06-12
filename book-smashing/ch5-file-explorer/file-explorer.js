//module dependencies

var fs = require('fs');

//synchronous way
//console.log(fs.readdirSync(__dirname));

//Asynchronous way
function async (err, files) { console.log(files)};
fs.readdir('.', async);
console.log("before the asynch() ???");