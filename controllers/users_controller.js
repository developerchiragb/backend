module.exports.profile = (req,res)=>{
    return res.render('user_profile',{title:"Profile Page"});
}

module.exports.posts = (req,res)=>{
    return res.end('<h1> I am a Post Page </h1>');
}
