module.exports = (sequelize, Sequelize) => {
    const Purchase = sequelize.define("purchase", {
      slno: {
        type: Sequelize.INTEGER
      },
      label: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.INTEGER
      },
      rate: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
    });
  
    return Purchase;
  };