const express = require('express');

const app = express();

const port = 8080;
const expressLayouts = require('express-ejs-layouts');

// use express router
const indexRouter = require('./routes/index');
app.use(expressLayouts);
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