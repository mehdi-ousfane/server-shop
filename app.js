const http = require('http');

const reqHand = require('./routes');
const server = http.createServer(reqHand);

server.listen(3000);
