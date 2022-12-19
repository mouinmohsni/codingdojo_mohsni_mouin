// import the controller 
//const eventController = require("../controller/event.controller")
const UserController = require("../controller/user.controller")
const { authenticate } = require('../config/jwt.config');

// =============================creat routs

module.exports =(app)=>{ //  we should be group all routes 

//-----------------------------------login - logout - register -------------------
    // creeate route for register
    app.post('/api/register',  UserController.register);

    // creeate route for login
    app.post('/api/login', UserController.login);

    // create route for logout
    app.post('/api/logout', UserController.logout);

    // create to get all users
    app.get('/api/users', UserController.getAllUsers);

     // create to get one  users by id
    app.get('/api/users/:id', UserController.getOneUser);

    // create to get one  users by id and update it 
    app.put('/api/users/:id', UserController.updateUser);

    // create to delete
    app.delete('/api/users/:id', UserController.deleteUser);

    // get user by mail
    // create to delete
    app.get('/api/user/', UserController.getOneUserByMail);
    










//------------------------------------------------------------------------------

    // app.post('/api/event', authenticate, addevent);
    // app.get('/api/event', authenticate, getAllevent);

    // create route for get all 
    // app.get("/api/event", eventController.findAllevent) // 

    // create route to add one
    // app.post("/api/event", eventController.Createevent); // 

    // create route for get one by id
    // app.get("/api/event/:_id", eventController.findOneById);// 

    // create route to update one
    // app.put("/api/event/:_id", eventController.updateevent);// 

    // create route to delete one
    // app.delete("/api/event/:_id", eventController.deleteevent);// 
} 
