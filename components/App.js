var React = require('react');
var Search = require('./Search');
var Results = require('./Results');
var Nav = require('./Nav');
var Title = require('./Title');
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
		this.updateSelected = this.updateSelected.bind(this);

		this.state = {
			results: {},
			selected: null,
			toGoList: null
		};
	}


	searchYelp (term, callback) {
		var that = this;

		return fetch('/post', {
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({term: term})
		})
		.then(function(results) { 
			return results.json()})
		.then(function(results) {
			that.setState({results: results});
		});
		// 	).then(function(err, result) {
		// 	console.log(result, "BACK FROM YELP REQ");
		// 	this.setState({results: result});
		// })
	}

	// gets togo list data from db
	getToGoList () {
		var that = this;

		return fetch('/togolist', {
			method: 'GET',
		}).then(function(results) { return results.json()})
		.then(function(results) {
			that.setState({results: results});
		})
	}

	// updates state AND posts to db
	updateSelected (entry) {
		console.log("BUTTON CLICK WORKED", entry);
		this.setState({selected: entry}, function() {
			fetch('/togolist', {
				headers: {
				  'Accept': 'application/json',
				  'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify(entry)
			})
		});
	}

	render () {
		if (this.state.results.businesses) {
			return (
				<div>
					<Nav />
					<Title />
					<Search searchYelp={this.searchYelp}/>
					<Results entries={this.state.results.businesses} updateSelected={this.updateSelected} />
				</div>
			);
		} else {
			return (
				<div>
					<Nav />
					<Title />
					<Search searchYelp={this.searchYelp}/>
					<div className="container"></div>
				</div>
			);
		}
	}
};


module.exports = App;