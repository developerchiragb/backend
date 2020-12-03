const User = require("../models/User");
const passport = require('passport')
const passportLocal = require('../config/passport-local-strategy');
module.exports.profile = (req, res) => {
  return res.render("user_profile", { title: "Codeial | Profile Page" });
};

module.exports.posts = (req, res) => {
  return res.end("<h1> I am a Post Page </h1>");
};

module.exports.signUp = (req, res) => {
  return res.render("user_sign_up", { title: "Codeial | Sign Up Page" });
};

module.exports.signIn = (req, res) => {
  if(req.isAuthenticated())
  {
      return res.redirect('/users/profile');
  }
  return res.render("user_sign_in", { title: "Codieal | Sign In Page" });
};

module.exports.createUser = (req, res) => {
  if (req.body.password == req.body.confirm_password) {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        console.log(err);
        return;
      }
      if (user) {
        console.log("User already exist in the database");
        return res.redirect("/users/sign-in");
      }
      User.create(req.body, (err, user) => {
        if (err) {
          console.log("error creating user in the database");
          return;
        }
        console.log("User created successfully in the database");
        return res.redirect("/users/sign-in");
      });
    });
  } else {
    return res.redirect("back");
  }
};


// use passport as a middleware to authenticate
module.exports.createSession = (req, res) => {
  return res.redirect("/users/profile");
};

module.exports.signOut = (req,res)=>{
    req.logout();
    return res.redirect('/');
}
