var React = require('react');

var RestaurantEntry = ({entry, addSelected}) => (
	<div className="restaurantEntry">
		<img src={entry.image_url} /><br />
		<img src={entry.rating_img_url} />
		<h3>{entry.name}</h3>
    <p>{entry.location.city + ', ' + entry.location.state_code}</p>
		<img className="checks" onClick={() => (addSelected(entry))} src='http://www.452brasil.com/public/componenti/1989/f1/check-mark-5-512.gif' />
		<img className="checks" src='https://www.mbamission.com/blog/wp-content/uploads/2015/09/incorrect-294245_1280.png'/>
	</div>
)

module.exports = RestaurantEntry;
