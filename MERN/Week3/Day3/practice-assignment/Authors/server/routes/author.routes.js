// import the controller 
const autherController = require("../controller/author.controller")

// =============================creat routs

module.exports =(app)=>{ //  we should be group all routes 
    // create route to add one
    app.post("/api/authors", autherController.CreateAuthor); //ok
    
    //create route for get all 
    app.get("/api/authors", autherController.findAllAuthor) // ok
    
    // create route for get one by id
    app.get("/api/authors/:_id", autherController.findOneById);// ok

    // create route to update one
    app.put("/api/authors/:_id", autherController.updateAuthor);//ok

    // create route to update one
    app.delete("/api/authors/:_id", autherController.deleteAuthor);//ok

      // create route add book
      app.put("/api/authors/books/:_id", autherController.addBooks);//ok


} 






























// create route to delete one
//app.delete("/api/notes/delete/:_id", autherController.deleteNote);//ok