const passport = require("passport");
const Post = require("../models/post");
const User = require("../models/User");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    (email, password, done) => {
      User.findOne({ email: email }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user || user.password != password) {
          console.log("Incorrect Username/Password");
          return done(null, false);
        }
        return done(null, user);
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
      if(err)
      {
          console.log("Error in finding user --> Passport");
          return done(err);
      }
    return done(null, user);
  });
});


// check if the user is authenticated
passport.checkAuthentication = (req, res, next) => {
    // if the user is signed in, then pass on the request to the next function (controller's action)
  if (req.isAuthenticated()) {
    return next();
  } 
  // if the user is not signed in  
  return res.redirect("/users/sign-in");
  
};

passport.setAuthenticatedUser = (req, res, next) => {
  if (req.isAuthenticated()) {
      // req.user contains the current signed-in user from the session cookie and we are just sending to local views 
      
    res.locals.user = req.user;

    
  } 
  next();
  

};

// passport.postCheck = (req,res,next)=>{
//   if(req.isAuthenticated())
//   {
//     next();
//   }
//   else 
//   {
//     return res.redirect('/',{title:"Codeial | Home"})
//   }
// }


module.exports = passport;
