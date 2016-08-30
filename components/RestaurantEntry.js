var React = require('react');

var RestaurantEntry = ({entry, updateSelected}) => (
	<div className="entryClass" onClick={() => (updateSelected(entry))}>
		<img src={entry.image_url} /><br />
		<img src={entry.rating_img_url} />
		<h3>{entry.name}</h3>
	</div>
)

module.exports = RestaurantEntry;