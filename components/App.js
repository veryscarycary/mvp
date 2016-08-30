var React = require('react');
var Search = require('./Search');
var Results = require('./Results');
var API_KEY = require('../API_KEY');
var Promise = require('bluebird');
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: API_KEY.consumer_key,
  consumer_secret: API_KEY.consumer_secret,
  token: API_KEY.token,
  token_secret: API_KEY.token_secret,
});

class App extends React.Component {
	constructor (props) {
		super(props)
	this.searchYelp = this.searchYelp.bind(this);
	}



	searchYelp (term, location) {
		yelp.search({ term: term})
		.then(function (data) {
		  console.log(data);
		})
		.catch(function (err) {
		  console.error(err);
		});
	}

	render () {
		return (
			<div>
			<h1 id="title">To - Go</h1>
				<Search searchYelp={this.searchYelp}/>
				<Results />
			</div>
		);
	}
}

console.log(API_KEY.consumer_key);

module.exports = App;