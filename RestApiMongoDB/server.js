
const express = require("express");
const bodyParser = require("body-parser");
const mongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/usersdb";

//Express
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoClient.connect(url, function(err, db){
   
    db.collection("scores").drop();
     
    let collection = db.collection("scores");
    let users = [
        {_id:1, scoreTime:10, scoreEat:5},
        {_id:2, scoreTime:300, scoreEat:150},
        {_id:3, scoreTime:40, scoreEat:30},
        {_id:4, scoreTime:100, scoreEat:90}
    ]
    collection.insertMany(users, function(err, result){  
        if(err){ 
            return console.log(err);
        }
        console.log(result.ops);
        db.close();
    });
});

//Routes
app.use('/scores', require('./routes/scores'));

app.listen(3000);
console.log("API is running on port 3000");