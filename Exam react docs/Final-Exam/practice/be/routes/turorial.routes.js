module.exports = app => {
    const purchases = require("../controllers/tutorial.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/purchase", purchases.create);
  
    // Retrieve all Tutorials
    router.get("/purchase", purchases.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", purchase.findAllPublished);
  
    // Retrieve a single Tutorial with id
    // router.get("/:id", purchases.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", purchases.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", purchases.delete);
  
    // // Delete all Tutorials
    // router.delete("/", purchases.deleteAll);
  
    app.use('/api/medicalshop', router);
  };