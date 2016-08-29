var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/scrumptiousList');



var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));)
db.once('open', function() {

	var restaurantSchema = mongoose.Schema({
	    name: String,
	    
	});

	var Restaurant = mongoose.model('Restaurant', restaurantSchema);
});

module.exports = db;