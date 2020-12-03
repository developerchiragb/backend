const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8080;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const MongoStore = require('connect-mongo')(session); // session as an argument because it is storing the session
const sassMiddleware = require('node-sass-middleware');
app.use(sassMiddleware({
  src:'assets/scss',
  debug:true,
  dest:'assets/css',
  outputStyle:'expanded',
  prefix:'/css'
}))
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static("./assets"));

app.use(expressLayouts);

//extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");


// mongostore is used to store the session cookie in the db
app.use(
  session({
    name: "Codeial",
    resave: false,
    saveUninitialized: false,
    secret: "blahsomething",
    cookie: {
      maxAge: 60 * 100 * 1000,
    },
    store: new MongoStore({
        mongooseConnection:db,
        host:'127.0.0.1',
        port:'27017',
        collection:'sessions',
        url:'mongodb://localhost:27017/codeial_development'
    },
    (err)=>{
      console.log(err || 'connect-mongodb setup ok')
    })
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// use express router
const indexRouter = require("./routes/index");

app.use("/", indexRouter);

app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running express server: ${err}`);
    return;
  }
  console.log(`Server is up and running on port: ${port}`);
});

process.on("SIGINT", function () {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  // some other closing procedures go here
  process.exit(1);
});
