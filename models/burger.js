// require Sequelize
var Sequelize = require('sequelize');
// make sequelize object using connection export
var sequelize = require('../config/connection.js');


module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burgerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    },
    devoured : { 
      type: Sequelize.BOOLEAN
      , allowNull: false
      , defaultValue: false }
  });

  
  return Burgers;

  
};

