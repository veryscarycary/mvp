const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db/index');
const API_KEY = require('../API_KEY');
const Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: API_KEY.consumer_key,
  consumer_secret: API_KEY.consumer_secret,
  token: API_KEY.token,
  token_secret: API_KEY.token_secret,
});


var port = 1337;

app.use(express.static(__dirname + '/../'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/post', function (req, res) {
	console.log(req.body, "REQQQQQ BOOOOOOODY BEFORE GET");
	yelp.search({ term: req.body.term, location: 'San Francisco'})
	.then(function (data) {
		res.send(data);
	  console.log(data);
	})
	.catch(function (err) {
	  console.error(err);
	});
});

app.get('/togolist', function (req, res) {
	console.log(req.body, "REQQQQQ BOOOOOOODY BEFORE GET");
	yelp.search({ term: req.body.term, location: 'San Francisco'})
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