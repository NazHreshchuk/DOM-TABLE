
const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');
const Strategy = require('passport-http').BasicStrategy;
const users = require('./routes/users');

//Express
const app = express();
app.use(bodyParser.json());


// Configure the Basic strategy for use by Passport.
passport.use(new Strategy(
    (username, password, cb) => {
        users.findByUsername(username, function(err, user) {
            if (err) { return cb(err); }
            if (!user) { return cb(null, false); }
            if (user.password != password) { return cb(null, false); }
            return cb(null, user);
        });
    }));

//Routes
app.use('/users', require('./routes/users'));
app.use('/groups', require('./routes/userGroups'));


app.get('/',
    passport.authenticate('basic', { session: false }),
    (req, res) => {
        res.json({ username: req.user.username, email: req.user.email, role: req.user.role });
    });

app.listen(3000);
console.log("API is running on port 3000"); 