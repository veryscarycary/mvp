var React = require('react');

class Nav extends React.Component {
	constructor (props) {
		super(props)

	}

	// inputHandler (e) {
	// 	this.props.searchYelp(this.state.value);
	// }

	// setStateSearch (e) {
	// 	this.setState({
	// 		value: e.target.value
	// 	});
	// }

	render () {
		return (
			<ul id="nav">
				<li onClick={this.props.searchYelp}><a href="#">Search</a></li>
				<li onClick={this.props.getToGoList}><a href="#">To-Go List</a></li>
			</ul>
		)
	}
}

module.exports = Nav;