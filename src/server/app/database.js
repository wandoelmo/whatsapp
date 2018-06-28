const mongoose = require('mongoose');
const database = require('./../config/database');

/**
 * Don't change
 */
let uri;

if(database.username && database.password) {
  uri = `mongodb://${database.username}:${database.password}@${database.host}:${database.port}/${database.database}`;
} else {
  uri = `mongodb://${database.host}:${database.port}/${database.database}`;
}

module.exports = mongoose.connect(uri);
