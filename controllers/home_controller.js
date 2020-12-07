const User = require('../models/User')
const Post = require('../models/post');
module.exports.home = (req,res)=>{
    if(req.isAuthenticated())
    {
        Post.find({}).populate('user').exec((err,posts)=>{
            if(err)
            {
                console.log(`Error in finding posts from the database: ${err}`);
                return;
            }
            else
            {
                return res.render('home',{title:"Codeial | Home",posts:posts,status:true})
            }
        })
    }
    else
    {
        return res.render('home',{title:"Codeial | Home Page",status:false});
    }    
}

module.exports.practice = (req,res)=>{
    return res.render('practice',{title:"Codeial | Practice"})
}

