const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.create = (req,res)=>{
    Post.findById(req.body.post,(err,post)=>{
        
        if(post)
        {
            Comment.create({
                content:req.body.content,
                post:req.body.post,
                user:req.user._id
            },(err,comment)=>{
                // handle error

                post.comments.push(comment);
                post.save();
                console.log(post.comments);
                res.redirect('/');
            })
        }
        else
        {
            return res.redirect('/');
        }

    })

}

module.exports.destroy = (req,res)=>
{
    Comment.findById(req.params.id,(err,comment)=>{
        if(comment.user = req.user.id)
        {
            let postId = comment.post;
            comment.remove();
            Post.findByIdAndUpdate(postId,{$pull:{comments:req.params.id}});
            return res.redirect('back');
        }
        else
        {
            res.redirect('back');
        }
    })
}