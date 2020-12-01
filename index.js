const express = require('express');

const app = express();

const port = 8080;

//express-ejs-layouts
const expressLayouts = require('express-ejs-layouts');

// use express router
const indexRouter = require('./routes/index');


const db = require('./config/mongoose');

// use the cookie-parser
const cookieParser = require('cookie-parser');
app.use(expressLayouts);
app.use(cookieParser());


//extract style and scripts from sub pages into the layout 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use(express.urlencoded());
app.use('/',indexRouter);
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./assets'));


app.listen(port,(err)=>{
    if(err)
    {
        console.log(`Error in running express server: ${err}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);

})

process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    // some other closing procedures go here
    process.exit(1);
  });