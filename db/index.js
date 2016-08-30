var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/togolist');



var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

	var restaurantSchema = mongoose.Schema({
	    name: String,
	    phone: String,
	    location: String,
	    hours: String
	});

	var Restaurant = mongoose.model('Restaurant', restaurantSchema);
});

module.exports = db;