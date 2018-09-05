var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/svetadb';

console.log('Connection to file "database.js"');

MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
  if(err) throw err;
  console.log('Connection to database established');

 //new syntax instead of: var collection = db.collection('sveta-test')!
  var collection = db.db().collection('sveta-test');
  var user = {firstName: "Ivan", lastName: "Ivanov", age: 30};
  collection.insertOne(user, function(err, result) {
    if(err) throw err;
    console.log(result.ops);
  });

  db.close();
});
