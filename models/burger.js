// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function( cb ) {
console.log( "Here in burger.js selectAll" );
    orm.selectAll( "burgers", function( res ) {
      cb( res );
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function( cols, vals, cb ) {
console.log( "Here in burger.js insertOne: " + cols + ":" + vals );
        orm.insertOne( "burgers", cols, vals, function( res ) {
      cb( res );
    });
  },
  updateOne: function( objColVals, condition, cb ) {
console.log( "Here in burger.js updateOne: " + objColVals + ":" + condition );
        orm.update( "burgers", objColVals, condition, function( res ) {
      cb( res );
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
