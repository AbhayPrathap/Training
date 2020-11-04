const db = require("../models");
const Register = db.register;
const Op = db.Sequelize.Op;

// Create and Save a new login
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a login
  const register = {
   name:req.body.name,
   accno:req.body.accno,
   password:req.body.password

  };

  // Save login in the database
  Register.create(register)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Login."
      });
    });
};

// Retrieve all login from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Register.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {

      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving login."
      });
    });
};

// Find User
  exports.findUser = (req, res) => {
    console.log(req.body)
    var usern = req.body.username;
    var pass = req.body.password;
    Register.findOne({ where:{username:usern,password:pass}})
      .then(data => {
        console.log("data from db",data)
        if(data)
        res.send(data);
        else{
          res.send({msg:"No data"})
        }
      })
      .catch(err => {
        console.log("err",err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving User."
        });
      });
  };

