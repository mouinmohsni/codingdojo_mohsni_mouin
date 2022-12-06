//1. import mongoose 
const mongoose = require("mongoose")

//2. create a schema ------------------------------------------- 
const jokeSchema = new mongoose.Schema({
setup : String,
punchline :String,
})
//3 . create instant of schema ----------------------------------
const Joke = mongoose.model("Joker" , jokeSchema);
//4. export schema ----------------------------------------------
module.exports = Joke;