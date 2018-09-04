var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/svetadb';

console.log('Connection to file "database.js"');

MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
  if(err) throw err;
  console.log('Connection to database established');
  db.close();
});
