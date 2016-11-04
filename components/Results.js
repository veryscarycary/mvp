var React = require('react');
var RestaurantEntry = require('./RestaurantEntry');

var Results = ({entries, addSelected}) => (

	<div className="results">
		<span id="resultsTitle">Search Results</span>
		<div className="flexRowWrap">
			{ entries.map(entry => <RestaurantEntry entry={entry} addSelected={ () => {
	      console.log(entry, 'consoled it');
	      return addSelected(entry);} } />) }
		</div>
	</div>
)


module.exports = Results;
