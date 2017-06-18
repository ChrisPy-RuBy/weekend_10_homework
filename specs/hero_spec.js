var assert = require('assert')
var Hero = require('../hero.js')

describe('Hero', function () {

var hero;

beforeEach(function() {
  hero = new Hero("Nardinold", "chezzeburgerz")
}); 

it("hero has a name", function () {
  assert.equal("Nardinold", hero.name);
})

it("hero has a wealth feature", function() {
  assert.equal(100, hero.health)
})

it("hero like favorite food", function() {
  assert.equal("chezzeburgerz", hero.favoriteFood)
} )

})
