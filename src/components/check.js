var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var res=[];
MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("ProjDB2");
 dbo.collection("Comp parts").find({}).toArray(function(err, res) {
 if (err) throw err;
 console.log(res.length);
 db.close();
 });
});
console.log(res.length);

