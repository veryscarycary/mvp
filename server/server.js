var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('../db/index');
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: 'j-dZCAqpvvMioyTCEZ11Gg',
  consumer_secret: 'vifitztKreRYYgvoKhqBvL3RzAg',
  token: 'o7uAZXISQ4MTxe9mnpw3a_BLlf58VX1S',
  token_secret: '-8s4C6nAUROUsmLpWO4oSWyzdsw',
});


var port = 1337;

app.use(express.static(__dirname + '/../'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/post', function (req, res) {
	console.log(req.body);
	yelp.search({ term: 'food', location: 'Montreal' })
	.then(function (data) {
		res.send(data);
	  console.log(data);
	})
	.catch(function (err) {
	  console.error(err);
	});
});

app.listen(port, function(err) {
	if (err) {
		console.log('Something went wrong!')
	}
	console.log('Listening on port ' + port);
});