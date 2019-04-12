var express = require( "express" );
var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require( "../models/burger.js" );

// Create all our routes and set up logic within those routes where required.
router.get( "/", function( req, res ) {
  burger.selectAll( function( data ) {
    var hbsObject = {
      burgers: data
    };
    console.log( hbsObject );
    res.render( "index", hbsObject );
  });
});

router.post( "/api/burgers", function( req, res ) {
  // If they didn't actually enter a name, don't do anything..
  if ( req.body.name.length === 0 ) {
    // Go back to the start!!
    res.redirect( "/" );
  }
  burger.insertOne([
    "burger_name"
  ], [
    req.body.name
  ], function(result) {
    // Go back to the start!!
    res.redirect( "/" );
  });
});

router.post( "/api/burgers/:id", function( req, res ) {
  var condition = "id = " + req.params.id;

  console.log( "condition: " + condition );

  burger.updateOne({
    devoured: true
  }, condition, function( result ) {
      // Go back to the start!!
      res.redirect( "/" );
  });  
});

// Export routes for server.js to use.
module.exports = router;
