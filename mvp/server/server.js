var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function(err) {
	if (err) {
		console.log('Something went wrong!')
	}
	console.log('Listening on port ' + port);
});