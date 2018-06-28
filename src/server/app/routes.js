const UserController = require('./controllers/UserController');
const MessageController = require('./controllers/MessageController');

module.exports = app => {

  app.use('/api/users', UserController);
  app.use('/api/messages', MessageController);

};
