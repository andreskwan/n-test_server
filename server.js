var http = require('http'),
    st   = require('node-static'),
    opts = { cache: false },
    file = new st.Server('./public', opts),
    port = process.env.PORT || 3002;

http.createServer(function (req, res) {
	//static content
    file.serve(req, res);
    //content created here
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end('<h1> Hello Telned from Web server</h1>')
}).listen(port);

console.log("App running on http://localhost:%s", port);
