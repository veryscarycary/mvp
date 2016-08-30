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
	}


	searchYelp (term, callback) {
		return fetch('http://localhost/post?t=' + term, {
		method: 'POST'});

	}

	render () {
		return (
			<div>
			<h1 id="title" >To - Go</h1>
				<Search searchYelp={this.searchYelp}/>
				<Results />
			</div>
		);
	}
}


module.exports = App;