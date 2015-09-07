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

  toggleFavorite(address) {
    if(this.isAddressinFavorites(address)){
      this.removeFromFavorites(address);
    }
    else{
      this.addToFavorites(address);
    }
  },

  addToFavorites(address) {
    var favorites = this.state.favorites;

    favorites.push({
      address: address,
      timestamp: Date.now()
    });

    this.setState({
      favorites: favorites
    });

    localStorage.favorites = JSON.stringify(favorites);
  },

  removeFromFavorites(address){
    var favorites = this.state.favorites;
    var index = -1;

    for(var i = 0; i < favorites.length; i++) {
      if(favorites[i].address == address) {
        index = i;
        break;
      }
    }

    //IF IT WAS FOUND, REMOVE IT FROM THE FAVORITES ARRAY
  }

  if(index !== -1) {
    favorites.splice(index, 1);

    this.setState({
      favorites: favorites
    });

    localStorage.favorites = JSON.stringify(favorites);
  }
},

isAddressinFavorites(address) {
  var favorites = this.state.favorites;

  for(var i = 0; i < favorites.length; i++) {
    if(favorites[i].address == address) {
      return true;
    }
  }
  return false;
},




})