var React = require('react');
var Search = require('./Search');
var Results = require('./Results');
var Promise = require('bluebird');

// var requestYelp = require('../requestYelp');

// requestYelp({'term': 'food'}, function(error, response, body) {
// 	if (error) {return error;}

// 	console.log(response);
// 	console.log(body);
// });



class App extends React.Component {
	constructor (props) {
		super(props)

		this.searchYelp = this.searchYelp.bind(this);

		this.state = {results: {}};
	}


	searchYelp (term, callback) {
		var that = this;

		return fetch('/post', {
			method: 'POST',
			body: JSON.stringify({term: term})
		}).then(function(results) { return results.json()})
		.then(function(results) {
			that.setState({results: results});
		})
		// 	).then(function(err, result) {
		// 	console.log(result, "BACK FROM YELP REQ");
		// 	this.setState({results: result});
		// })

	}

	render () {
		if (this.state.results.businesses) {
			return (
				<div>
					<h1 id="title" >To - Go</h1>
					<Search searchYelp={this.searchYelp}/>
					<Results entries={this.state.results.businesses}/>
				</div>
			);
		} else {
			return (
				<div>
					<h1 id="title" >To - Go</h1>
					<Search searchYelp={this.searchYelp}/>
				</div>
			);
		}
	}
};


module.exports = App;