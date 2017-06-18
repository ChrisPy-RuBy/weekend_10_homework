var _ = require("lodash")


var Hero = function(name, favoriteFood) {
  this.name = name;
  this.health = 100;
  this.favoriteFood = favoriteFood;

}

module.exports = Hero;