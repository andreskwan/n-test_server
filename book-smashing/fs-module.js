var fs = require('fs');

fs.readFile('./someFile.txt', function (err, contents) {
	if (!err) console.log (contents);
});