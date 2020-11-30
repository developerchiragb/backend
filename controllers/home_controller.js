module.exports.home = (req,res)=>{
    return res.render('home',{title:"Home Page"});
}

module.exports.practice = (req,res)=>{
    return res.end('<h1> Hi! I am Practice Page </h1>');
}