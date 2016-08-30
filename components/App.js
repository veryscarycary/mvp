var React = require('react');
var Search = require('./Search');
var Results = require('./Results');
var Promise = require('bluebird');

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


module.exports = App;