const Posts = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/User');
const Post = require('../models/post');
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

module.exports.destroy = (req,res)=>
{
    Post.findById(req.params.id,(err,post)=>
    {
        console.log(post.user);
        console.log(req.user.id);
        if(post.user == req.user.id) // check who is deleting the post is the owner of the post.
        {
            post.remove();
            Comment.deleteMany({post:req.params.id},(err)=>{
                return res.redirect('back');
            })
            
        }
        else
        {
            return res.redirect('back');
        }
    })
}

