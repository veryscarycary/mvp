var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
  name: String,
  phone: String,
  location: String,
  hours: String
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);


// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {

// 	var restaurantSchema = mongoose.Schema({
// 	    name: String,
// 	    phone: String,
// 	    location: String,
// 	    hours: String
// 	});

// 	var Restaurant = mongoose.model('Restaurant', restaurantSchema);
// });
