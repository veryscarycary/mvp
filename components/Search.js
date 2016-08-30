var React = require('react');

class Search extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			value: ''
		}
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
			<div id="search">
				<input name="searchbar" onChange={this.setStateSearch.bind(this)} value={this.state.value}/>
				<button onClick={this.inputHandler.bind(this)}>GO</button>
			</div>
		)
	}
}

module.exports = Search;