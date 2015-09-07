var React = require('react');

var Search = require('./Search');
var Map = require('./Map');
var CurrentLocation = require('./CurrentLocation');
var LocationList = require('./LocationList');

var App = React.createClass({

  getInitialState() {

    //EXTRACT FAV LOCATIONS FROM LOCAL STORAGE

    var favorites = [];

    if(localStorage.favorites) {
      favorites = JSON.parse(localStorage.favorites);
    }

    return {
      favorites: favorites,
      currentAddress: 'Paris, France',
      mapCoordinates: {
        lat: 48.856614,
        lng: 2.3522219,
      }
    };
  },

