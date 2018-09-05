const express = require('express');
const app = express();
var database = require('./database');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', function(req, res) {
  console.log('GET-request is working.');
  var data = {email: 'your email', pass: 'your password'};
  console.log(data);
  res.render('index', {data: data});
});

app.post('/', urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.render('index', {data: req.body});
});

app.listen(3000, '127.0.0.1', console.log('Web-server is working.'));
