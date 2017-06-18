var assert = require('assert')
var Food = require('../food.js')


describe('Food', function() {
  var food;

  beforeEach(function() {
    food = new Food("quinoa", 10)
  })

  it("food has a name", function() {
    assert.equal("quinoa", food.name)
  })

  it("food has a replenishement value", function() {
    assert.equal(10, food.replenishmentValue)
  })
})