var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/nodejstest',function(err,db){
	var collection = db.collection('users');
   collection.insert({
     name: 'John',
     email: 'john@test.com'
   }, function(err, result) {
   	console.log(result);
 });
})
