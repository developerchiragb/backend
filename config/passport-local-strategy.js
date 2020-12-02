const User = require('../models/User');
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

// authentication using passport   
passport.use(new LocalStrategy({
    usernameField:'email'
},
    (email,password,done)=>{
        // find the user and establish the identity
        User.findOne({email:email},(err,user)=>{
            if(err)
            {
                console.log(`Error in finding user: ${err}`);
                return done(err);
            }
            if(!user || user.password != password)
            {
                console.log("Incorrect Username/Password or User does not exist");
                return done(null,false);
            }
            return done(null,user);
        })
    }
))


//serializing the user to decide which key is to be kept in the cookies.

passport.serializeUser((user,done)=>{
    done(null,user.id); // this automatically encrypts the cookie.
})

// deserializing the user from the key in the cookies.
passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        if(err)
        {
            console.log(` Error in finding user: ${err}`);
            return done(err);
        }
        return done(null,user);



    })
});

module.exports = passport;



