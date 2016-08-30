var React = require('react');

class Nav extends React.Component {
	constructor (props) {
		super(props)

	}

	inputHandler (e) {
		this.props.searchYelp(this.state.value);
	}

	setStateSearch (e) {
		this.setState({
			value: e.target.value
		});
	}

	render () {
		return (
			<ul id="nav">
				<li><a href="/post">Search</a></li>
				<li><a href="/get">To-Go List</a></li>
			</ul>
		)
	}
}

module.exports = Nav;