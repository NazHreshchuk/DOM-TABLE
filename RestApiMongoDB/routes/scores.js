const express = require("express");
const router = express.Router();

const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/usersdb";

// Routes

// Get(READ) all users
router.get('/',function(req, res){
    mongoClient.connect(url, function(err, db){
        db.collection("scores").find({}).toArray(function(err, users){
            res.send(users)
            db.close();
        });
    });
});

// Create(POST) new score
router.post('/', function(req, res){

    if(!req.body) return res.sendStatus(400);

    let user = {scoreTime: req.body.scoreTime, scoreEat: req.body.scoreEat};
     
    mongoClient.connect(url, function(err, db){
        
        db.collection("scores").find({}).toArray(function(err, result) {
             if (err) throw err;
             user._id = ++result.length;
                db.collection("scores").insertOne(user, function(err, result){
                
                if(err) return res.status(400).send();
                
                res.send(user);
                db.close();
                });
        });
        
    });

});

// Get(READ) one user by Id
router.get('/:userId', function(req, res){

    let userid = req.params.userId; // получаем id
    let query = {};
    query["_id"] = Number(userid);   

    mongoClient.connect(url, function(err, db){
        db.collection("scores").findOne(query, function(err, results){
			
            if(err) return res.status(400).send("Error!");      
            res.send(results);
            db.close();
        });
    });
});

//UPDATE (PUT) user
router.put('/:userId', function(req,res){

    if(!req.body) return res.sendStatus(400);

    const id = req.params["userId"];
    let userScoreTime = req.body.scoreTime;
    let userScoreEat = req.body.scoreEat;
     
    mongoClient.connect(url, function(err, db){
        db.collection("scores").findOneAndUpdate({_id: Number(id)}, { $set: {scoreTime: userScoreTime, scoreEat: userScoreEat}},
             {returnOriginal: false },function(err, result){
             
            if(err) return res.status(400).send("Error!!!");
             
            let user = result.value;
            res.send(user);
            db.close();
        });
    });

});

////DELETE /////
router.delete('/:userId', function(req, res){
   
    const id = req.params.userId;
    mongoClient.connect(url, function(err, db){
        db.collection("scores").deleteOne({_id: Number(id)}, function(err, result){
             
            if(err) return res.status(400).send("Error");
             
            let user = result;
            res.send(user);
            db.close();
        });
    });


});
// Return router
module.exports = router;