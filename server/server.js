var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('../db/index');


var port = 1337;

app.set('port', port)

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.redirect('index');
});

app.listen(port, function(err) {
	if (err) {
		console.log('Something went wrong!')
	}
	console.log('Listening on port ' + port);
});