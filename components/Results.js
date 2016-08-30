var React = require('react');
var RestaurantEntry = require('./RestaurantEntry');

var Results = ({entries, updateSelected}) => (

	<div className="results">
	RESULTS
		{ entries.map(entry => <RestaurantEntry entry={entry} updateSelected={updateSelected} />) }
	</div>
)


module.exports = Results;