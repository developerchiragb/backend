const User = require('../models/User')

module.exports.home = (req,res)=>{
    console.log(req.cookies.user_id);
    res.cookie('chirag',23);
    console.log(req.cookies);
    return res.render('home',{title:"Codeial | Home Page"});
}

module.exports.practice = (req,res)=>{
    return res.end('<h1> Hi! I am Practice Page </h1>');
}

