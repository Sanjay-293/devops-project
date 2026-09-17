var http = require('http');

var PORT = process.env.PORT || 3000;

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
});

server.listen(PORT, function () {
  console.log('Server is running on port ' + PORT);
});

