module.exports = app => {
  const users = require("../controllers/registercontrollers");

  var router = require("express").Router();

  // Create a new User
  router.post("/register", users.create);

  // Retrieve all Users
  router.get("/register", users.findAll);

  // User login
  router.post("/login", users.findUser);

  app.use('/api/loginapp', router);
};