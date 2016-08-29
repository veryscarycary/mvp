var React = require('react');
var Search = require('./Search');
var Results = require('./Results');

class App extends React.Component {
	constructor (props) {
		super(props)

	}

	render () {
		return (
			<div>
			<h1 id="title">To - Go</h1>
				<Search />
				<Results />
			</div>
		)
	}
}

module.exports = App;