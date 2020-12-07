const Posts = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/User');
module.exports.create = (req,res)=>{
    

    Posts.create({
        content:req.body.content,
        user:req.user._id
    },(err,post)=>{
        if(err)
        {
            console.log(`Error in adding post to the database: ${err}`);
            return;

        }
        else
        {
        return res.redirect('/');
        }
    })
}

module.exports.addComment = (req,res)=>{
    console.log(req.user)
    Comment.create({
        content:req.body.content,
        user:req.user._id,
        
        posts:post._id
    },(err,comment)=>{
        if(err)
        {
            console.log("Error adding comments to the database");
            return;
        }
        else 
        {
            return res.redirect('/');
        }
    })


}
    

