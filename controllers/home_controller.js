const User = require('../models/User')
const Post = require('../models/post');
module.exports.home = (req,res)=>{
    Post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:
        {
            path:'user'
        }
    })
    .exec((err,posts)=>{
            User.find({},function(err,users){
            return res.render('home',{title:"Codeial | Home",posts:posts,all_users:users})
            
            });
        
            
        });
    }

        

module.exports.practice = (req,res)=>{
    return res.render('practice',{title:"Codeial | Practice"})
}

