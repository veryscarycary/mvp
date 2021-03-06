const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const API_KEY = require('../API_KEY');
const Yelp = require('yelp');
const mongoose = require('mongoose');
var Restaurant = require('../db/Restaurant.model');

var db = 'mongodb://localhost/togolist';
mongoose.connect(db);

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
  yelp.search({ term: req.body.term, location: 'San Francisco'})
  .then(function (data) {
    res.send(data);
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('/togolist', function (req, res) {
  Restaurant.find()
  .exec(function(error, restaurants) {
    if (error) {
      console.log('There was an error getting a restaurant from the db');
    } else {
      console.log(restaurants);
      res.send(restaurants);
    }
  });
});

app.post('/togolist', function (req, res) {
  console.log(req.body);
  var newRestaurant = new Restaurant();

  newRestaurant.name = req.body.name;
  newRestaurant.image_url = req.body.image_url;
  newRestaurant.rating_img_url = req.body.rating_img_url;
  newRestaurant.city = req.body.location.city;
  newRestaurant.state_code = req.body.location.state_code;

  console.log(newRestaurant, "MUST SEE")


  newRestaurant.save(function(error, restaurant) {
    if (error) {
      console.log('There was an error while adding a restaurant to the db');
    } else {
      console.log(restaurant);
      res.send(restaurant);
    }
  });
});

///////////
// Test delete and update later
///////////

app.delete('/togolist', function (req, res) {
  console.log(req.body, 'CHECK ME OUT');
  Restaurant.findOneAndRemove(req.body, function(error, restaurants) {
    if (error) {
      console.log('There was an error deleting a restaurant to the db');
    } else {
      console.log(restaurants);
      res.send(restaurants);
    }
  });
});

// posts user selected restaurant to db
app.put('/togolist', function (req, res) {
  Restaurant.findOneAndUpdate({
    name: req.query.name
  }, {$set: {name: req.body.name}}, {upsert: true}, function(err, newRestaurant) {
    if (error) {
      console.log('There was an error updating a restaurant to the db');
    } else {
      console.log(restaurant);
      res.send(restaurant);
    }
  });
});

app.listen(port, function(err) {
  if (err) {
    console.log('Something went wrong!');
  }
  console.log('Listening on port ' + port);
});