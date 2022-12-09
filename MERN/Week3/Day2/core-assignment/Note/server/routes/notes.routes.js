// import the controller 
const NoteController = require("../controller/notes.controller")

// =============================creat routs

module.exports =(app)=>{ //  we should be group all routes 
    // create route for get all 
    app.get("/api/notes", NoteController.findAllnote) // ok
    
    // create route for get one by id
    app.get("/api/notes/:_id", NoteController.findOneById);// ok
    
    
    // create route to add one
    app.post("/api/note/new", NoteController.CreateNote); //ok

    // create route to update one
    app.put("/api/notes/update/:_id", NoteController.updateNote);//ok

    // create route to delete one
    app.delete("/api/notes/delete/:_id", NoteController.deleteNote);//ok
} 
