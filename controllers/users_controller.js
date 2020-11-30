const User = require('../models/User')
module.exports.profile = (req,res)=>{
    return res.render('user_profile',{title:"Codeial | Profile Page"});
}

module.exports.posts = (req,res)=>{
    return res.end('<h1> I am a Post Page </h1>');
}


module.exports.signUp = (req,res)=>{
    return res.render('user_sign_up',{title:"Codeial | Sign Up Page"});

}


module.exports.signIn = (req,res)=>{
    return res.render('user_sign_in',{title:"Codieal | Sign In Page"});
    
}

module.exports.createUser = (req,res)=>{
    if(req.body.password == req.body.confirm_password)
    {
        User.create(req.body);
        console.log("User created successfully in the database");
        return res.redirect('/users/sign-in');

    }
    return res.redirect('back');

}

module.exports.createSession = (req,res)=>{
    User.findOne({email:req.body.email},(err,User)=>{
        if(err)
        {
            console.log(`Error occured finding data in the database: ${err}`);
            return;
        }
        if(User)
        {
            console.log("User exist in the database login successfull");
            return res.redirect('/users/sign-up');
        }
    })

}