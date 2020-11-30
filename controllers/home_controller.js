const User = require('../models/User')

module.exports.home = (req,res)=>{
    return res.render('home',{title:"Codeial | Home Page"});
}

module.exports.practice = (req,res)=>{
    return res.end('<h1> Hi! I am Practice Page </h1>');
}

