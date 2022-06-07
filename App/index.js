const http = require('http');
var url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  var params = url.parse(req.url, true).query;
  res.setHeader('Content-Type', 'text/plain');
  res.write("paramnyaadalah"+ params.andi+params.halo);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});