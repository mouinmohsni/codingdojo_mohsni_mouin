const express = require("express")         // import express
const app = express()                     // declar app
const PORT = 8000                        // porte how server youse
const DB_NAME = "jokes"                      // declart data base

// middelware

app.use(express.json(), express.urlencoded({ extended: true }));

// Connect to the DB ---------
require("./config/mongoose.config")(DB_NAME)

// import the toutes ---
require("./routes/jokes.routes")(app)














// ----------------------------------------------------------------------
app.listen(PORT, () => { console.log(`Server started on PORT ${PORT} 🚀🚀`) })