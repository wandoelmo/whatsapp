const http = require('./server');
const io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
});
