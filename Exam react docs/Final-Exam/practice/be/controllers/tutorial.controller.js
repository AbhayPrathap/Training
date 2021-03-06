const db = require("../models");
const Purchase = db.purchases;
const Op = db.Sequelize.Op;

// Create and Save a new Purchase
exports.create = (req, res) => {
  // Validate request
  if (!req.body.slno) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Purchase
  const purchase = {
    slno: req.body.slno,
    label: req.body.label,
    type: req.body.type,
    qty: req.body.qty,
    rate: req.body.rate,
    date: req.body.date

  };

  // Save Purchase in the database
  Purchase.create(purchase)
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

// Retrieve all Purchase from the database.
exports.findAll = (req, res) => {
  const slno = req.query.slno;
  var condition = slno ? { slno: { [Op.like]: `%${slno}%` } } : null;

  Purchase.findAll({ where: condition })
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

// // Find a single Purchase with an id
// exports.findOne = (req, res) => {
//     const id = req.params.id;

//     Purchase.findByPk(id)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error retrieving Purchase with id=" + id
//         });
//       });
//   };

// // Update a Purchase by the id in the request
// exports.update = (req, res) => {
//     const id = req.params.id;

//     Purchase.update(req.body, {
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Purchase was updated successfully."
//           });
//         } else {
//           res.send({
//             message: `Cannot update Purchase with id=${id}. Maybe Purchase was not found or req.body is empty!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error updating Purchase with id=" + id
//         });
//       });
//   };

// // Delete a Purchase with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;

//     Purchase.destroy({
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Purchase was deleted successfully!"
//           });
//         } else {
//           res.send({
//             message: `Cannot delete Purchase with id=${id}. Maybe Purchase was not found!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Could not delete Purchase with id=" + id
//         });
//       });
//   };

// // Delete all Purchase from the database.
// exports.deleteAll = (req, res) => {
//     Purchase.destroy({
//       where: {},
//       truncate: false
//     })
//       .then(nums => {
//         res.send({ message: `${nums} Purchase were deleted successfully!` });
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while removing all purchase."
//         });
//       });
//   };

// // // Find all published Purchase
// // exports.findAllPublished = (req, res) => {
// //     Purchase.findAll({ where: { published: true } })
// //       .then(data => {
// //         res.send(data);
// //       })
// //       .catch(err => {
// //         res.status(500).send({
// //           message:
// //             err.message || "Some error occurred while retrieving purchase."
// //         });
// //       });
// //   };