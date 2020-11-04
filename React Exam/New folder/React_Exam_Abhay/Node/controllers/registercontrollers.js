const db = require("../models");
const Register = db.register;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.email) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a User
    const user = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      
  
    };
  
    // Save User in the database
    Register.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Purchase."
        });
      });
  };
  
  // Retrieve all users from the database.
  exports.findAll = (req, res) => {
    const email = req.query.email;
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;
  
    Register.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
  
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving purchase."
        });
      });
  };