const http = require('http');

const reqHand = require('./routes');
const server = http.createServer((req, res) => {
  reqHand
});

server.listen(3000);
