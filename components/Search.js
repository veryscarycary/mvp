var React = require('react');

class Search extends React.Component {
	constructor (props) {
		super(props)

	}

	render () {
		return (
			<div id="search">
				<input name="searchbar" />
				<button>GO</button>
			</div>
		)
	}
}

module.exports = Search;