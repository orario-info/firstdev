let port = process.env.PORT || 5000;
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port, () => console.log('Server http://localhost:'+port));
