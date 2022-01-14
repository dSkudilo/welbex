module.exports = app => {
    const welbex = require("../controllers/welbex.controller.js")
  
    var router = require("express").Router()
  
    // Create a new Tutorial

    router.post("/", welbex.create)
    router.get("/", welbex.findAll)
    router.get("/aaaa", welbex.findAll)
    router.get("/equal", welbex.findAllWithEqual)
    router.get("/include", welbex.findAllWithInclude)
    router.get("/more", welbex.findAllWithMore)
    router.get("/less", welbex.findAllWithLess)
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/welbex', router);
  };