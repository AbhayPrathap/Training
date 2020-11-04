module.exports = app => {
    const users = require("../controllers/registercontrollers");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/register", users.create);
  
    // Retrieve all Users
    router.get("/register", users.findAll);
  
  
    // Retrieve a single User with credentials
    // router.get("/:id", users.findOne);
  
    app.use('/api/loginapp', router);
  };