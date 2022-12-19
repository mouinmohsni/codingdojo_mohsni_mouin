const express = require("express")         // import express
const dontev = require ('dotenv').config({path:'./config/config.env'});
const app = express()                     // declar app
const cors = require("cors")              // import middelwere to connect tow server 
//const PORT = 8000                        // porte how server youse
const DB_NAME = "db-ProjetMERN"                      // declart data base
const cookieParser = require('cookie-parser'); //---???
// middelware
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({ extended: true }));


app.use(cookieParser());


// Authentication middleware
require('./config/jwt.config')

// Connect to the DB ---------
require("./config/mongoose.config")(DB_NAME);
// import the toutes ---
require("./routes/event.routes")(app);
require('./routes/product.routes')(app);


// ----------------------------------------------------------------------
app.listen(process.env.PORT, () => { console.log(`Server started on PORT 🚀🚀${process.env.PORT} -----  go go go ------`) })
