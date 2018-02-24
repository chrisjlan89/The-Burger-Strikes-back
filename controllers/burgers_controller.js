

var express = require("express");
var burger = require("../models");

var router = express.Router();


    // HTML Route

    // router.get('/', function(req, res) {
    //   res.sendFile(__dirname + "/../views/index.html");
    // })
  


router.get("/", function(req, res) {
  
  burger.Burgers.findAll({
    
  }).then(function(dbBurger) {
       console.log( "burgers" , dbBurger[0].burgerName)
    res.render("index", {burgers : dbBurger});
  })
  
  
  });
  
  router.post("/api/burgers", function(req, res) {
    console.log(req.body)
   burger.Burgers.create({
      
      burgerName : req.body.burgerName,
      devoured : 0
     
  }).then(function(dbBurger){
    res.json(dbBurger)
  
    });
  });
  
  
  
  router.put("/api/eaten/:id" , function(req, res) {
    var burgerId = req.params.id;
  
    console.log("burgerId", burgerId);
   burger.Burgers.update({devoured : 1}, {where :{ id : burgerId}
      
    }).then(function(dbBurger){
      res.json(dbBurger)
    })
    });
    
   


    
   
  
  // Export routes for server.js to use.
  module.exports = router;

