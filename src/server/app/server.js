const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

require('./database');
require('./routes')(app);

module.exports = http.Server(app);
