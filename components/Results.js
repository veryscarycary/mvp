var React = require('react');
var RestaurantEntry = require('./RestaurantEntry');

var Results = ({entries}) => (

	<div className="results">
	RESULTS
		{ entries.map(entry => <RestaurantEntry entry={entry} />) }
	</div>
)


module.exports = Results;