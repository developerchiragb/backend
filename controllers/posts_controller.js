const Posts = require('../models/post');

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