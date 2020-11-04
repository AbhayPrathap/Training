module.exports = (sequelize, Sequelize) => {
    const Register = sequelize.define("Users", {
      email: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return Register;
  };
