const express = require("express");         // import express
const app = express();                     // declar app
const cors = require("cors");              // import middelwere to connect tow server 
// global varibol ==================================================================
const PORT = 8000 ;                       // porte how server youse / or ||processe.env.PORT
const DB_NAME = "beltreviewauthordb";                      // declart data base

// middelware
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// Connect to the DB ---------
require("./config/mongoose.config")(DB_NAME)

// import the toutes ---
require("./routes/author.routes")(app)



// ----------------------------------------------------------------------
app.listen(PORT, () => { console.log(`Server started on PORT ${PORT} 🚀🚀`) })

