var React = require('react');
var Search = require('./Search');
var Results = require('./Results');
var Nav = require('./Nav');
var Title = require('./Title');
var Promise = require('bluebird');

// var requestYelp = require('../requestYelp');

// requestYelp({'term': 'food'}, function(error, response, body) {
//  if (error) {return error;}

//  console.log(response);
//  console.log(body);
// });



class App extends React.Component {
  constructor (props) {
    super(props)

    this.searchYelp = this.searchYelp.bind(this);
    this.addSelected = this.addSelected.bind(this);
    this.getToGoList = this.getToGoList.bind(this);
    this.deleteSelected = this.deleteSelected.bind(this);

    this.state = {
      results: {},
      selected: null,
      toGoList: null,
    };
  }


  searchYelp (term, callback) {
    var that = this;
    term ? 'term' : 'food';

    return fetch('/post', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({term: term})
    })
    .then(function(results) { 
      return results.json()})
    .then(function(results) {
      console.log(results, "SEARCH YELP RESULTS");
      that.setState({results: results.businesses});
    });
    //  ).then(function(err, result) {
    //  console.log(result, "BACK FROM YELP REQ");
    //  this.setState({results: result});
    // })
  }

  // gets togo list data from db
  getToGoList () {
    var that = this;
    console.log('Please check the results on console');

    return fetch('/togolist', {
      method: 'GET',
    }).then(function(results) { return results.json(); })
    .then(function(results) {
      console.log(results, 'RESULTS');
      that.setState({
        results: results
      });
    });
  }

  // updates state AND posts to db
  addSelected (entry) {
    this.setState({selected: entry}, function() {
      return fetch('/togolist', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(entry)
      });
    });
  }

  deleteSelected (entry) {
    return fetch('/togolist', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(entry)
    });
  }

  render () {
    // if (this.state.search) {
    //  var componentToRender = <Results entries={this.state.results.businesses} addSelected={this.addSelected} />
    // } else {
    //  var componentToRender = 
    // }

    if (this.state.results.length) {
      return (
        <div>
          <Nav searchYelp={this.searchYelp} getToGoList={this.getToGoList} />
          <Title />
          <Search searchYelp={this.searchYelp}/>
          <Results entries={this.state.results} addSelected={this.addSelected} deleteSelected={this.deleteSelected} />
        </div>
      );
    } else {
      return (
        <div>
          <Nav searchYelp={this.searchYelp} getToGoList={this.getToGoList} />
          <Title />
          <Search searchYelp={this.searchYelp}/>
          <div className="container">
            <p id="paragraph"> Quick! Add your favorite food and soon to be favorite restaurants
           above so your next foodie adventure is never more than a finger tip away!
           </p>
          </div>
        </div>
      );
    }
  }
};


module.exports = App;