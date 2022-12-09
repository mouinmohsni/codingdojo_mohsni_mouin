//1. import mongoose 
const mongoose = require("mongoose")

//2. create a schema ------------------------------------------- 
const NotesSchema = new mongoose.Schema({
                                        title : {   type : String,
                                                    minlength:[3,"{PATH} must have at least 3 chars, but you entered {VALUE} "],
                                                    required: true,
                                                },
                                        Content : {    type : String,
                                                        required: true,
                                                        minlength:[5,"{PATH} must have at least 5 chars, but you entered {VALUE}"],
                                                    },
                                        is_Impotant :{
                                                        type: Boolean,
                                                        default: false
                                                    }
                                                },{timestamps: true} )
//3 . create instant of schema ----------------------------------
const Note = mongoose.model("Note" , NotesSchema);
//4. export schema ----------------------------------------------
module.exports = Note;

