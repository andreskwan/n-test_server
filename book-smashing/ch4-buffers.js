//Buffers
//allow to convert data between encodings
//example
//buffer of base64 (representation of an img)
//then 
//write down the buffer to a file as a binary PNG 
var mybuffer = new Buffer('==ii1j2i3h1i23h', 'base64');

console.log(mybuffer);
require('fs').writeFile('ch4-logo.gif',mybuffer);
