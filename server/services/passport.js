const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
   // Verify username and password
   // call done, if correct, 
   //otherwise call done with false 
   User.findOne({email: email}, function(err, user) {
       if(err) { return done(err); }       
       if(!user) { return done(null, false); }
       
       
   });
   
   
});

// Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // see if user Id in the payload exists in the DB
    // if it does, call 'done' with that 
    // otherwise, call done without a user object
    User.findById(payload.sub, function(err, user) {
        if(err) { return done(err, false); }
    })
    
    if(user) {
        done(null, user);
    } else {
        done(null, false);
    }
})

// Tell passport to use this strategy
passport.use(jwtLogin);