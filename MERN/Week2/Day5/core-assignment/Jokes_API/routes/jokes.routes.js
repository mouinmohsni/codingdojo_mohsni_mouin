// import the controller 
const JokeController = require("../controller/jokes.controller")

// =============================creat routs

module.exports =(app)=>{ //  we should be group all routes 
    // create route for get all 
    app.get("/api/jokes", JokeController.findAllJokes) // ok
    
    // create route for get one by id
    app.get("/api/jokes/:_id", JokeController.findOneById);// ok
    
    // create route for get one random
    app.get("/api/jokes/random", JokeController.findAllJokes); // ko
    
    // create route to add one
    app.post("/api/jokes/new", JokeController.CreateJoke); //ok

    // create route to update one
    app.put("/api/jokes/update/:_id", JokeController.updateJoke);//ok

    // create route to delete one
    app.delete("/api/jokes/delete/:_id", JokeController.deleteJoke);//ok
} 
