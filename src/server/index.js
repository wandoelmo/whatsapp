require('dotenv').config();
require('./app/socket');

const server = require('./app/server');

server.listen(3001);
