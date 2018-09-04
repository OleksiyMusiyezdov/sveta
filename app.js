const express = require('express');
const app = express();
var database = require('./database');

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', function(req, res) {
  console.log('GET-request is working.');
  res.render('index');
});

app.listen(3000, '127.0.0.1', console.log('Web-server is working.'));
