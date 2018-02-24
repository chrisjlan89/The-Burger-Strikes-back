module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burgerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [7]
      }
    },
    devoured : { 
      type: DataTypes.BOOLEAN
      , allowNull: false
      , defaultValue: false }
  });

  
  return Burgers;

  
};

