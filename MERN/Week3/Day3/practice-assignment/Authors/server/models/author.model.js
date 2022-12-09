//1. import mongoose 
const mongoose =require("mongoose");

//2. create a schema ------------------------------------------- 
const NuthorSchma = new mongoose.Schema({

                                    name :{ type :String ,
                                    minlength :[3 ,"{PATH} must be  more than 3 caractere"],
                                    required : [true, 'Name is required']                                    
                                    },
                        books:[{
                            title : {type : String,
                                    minlength :[3 ,"{PATH} must be  more than 3 caractere"],
                                    equired : [true, 'Name is required'] }
                        }
                        ]
},
{timestamps: true }
);
//3 . create instant of schema ----------------------------------
const author = mongoose.model("author" ,NuthorSchma );

//4. export schema -------------------------------
module.exports = author ;

// 3+4 ==> module.exports Author =  mongoose.model("Author" ,NuthorSchma );