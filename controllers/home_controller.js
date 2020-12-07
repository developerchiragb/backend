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
            if(err)
            {
                console.log(`Error in finding posts from the database: ${err}`);
                return;
            }
            else
            {
                return res.render('home',{title:"Codeial | Home",posts:posts})
            }
        })
    }

        

module.exports.practice = (req,res)=>{
    return res.render('practice',{title:"Codeial | Practice"})
}

