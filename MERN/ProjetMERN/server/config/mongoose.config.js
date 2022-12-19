const mongoose = require("mongoose");

module.exports = (DB_NAME) => {
    mongoose.connect(`mongodb://127.0.0.1/${DB_NAME}`)
    .then(()=>{console.log(`Estiblished a connection to the database 🤖🤖 ${DB_NAME}`)})
    .catch(err=>{console.log( `there was a problem to ${DB_NAME}`, err)})
} 
