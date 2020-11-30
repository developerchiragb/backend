module.exports.profile = (req,res)=>{
    return res.end('<h1> I am Profile Page </h1>');
}

module.exports.posts = (req,res)=>{
    return res.end('<h1> I am a Post Page </h1>');
}
