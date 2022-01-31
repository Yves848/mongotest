const mongo = require('mongodb').MongoClient;

const url = "mongodb://192.168.50.89:27017/"

mongo.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db('testdb');
    // dbo.createCollection("test", (err, res) => {
    //     if (err) throw err;
    //     console.log("Collection created");
    //     db.close();

    // });
    let myObj = {name: "Company Inc", address: "Highway 37"};
    // dbo.collection("test").insertOne(myObj, (err, res) => {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     db.close();
    // })
    dbo.collection("test").findOne({}, (err, res) => {
        if (err) throw err;
        console.log(res._id.toString(), res. res.name);
        db.close();
    });
  });

