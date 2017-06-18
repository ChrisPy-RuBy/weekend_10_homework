var assert = require('assert')
var Hero = require('../hero.js')
var Food = require('../food.js')
var Task = require('../task.js')

describe('Hero', function () {

  var hero;
  var hero2;
  var food;
  var task;

  beforeEach(function() {
    hero = new Hero("Nardinold", "chezzeburgerz");
    hero2 = new Hero("Peter no pants", "deadflies");
    food = new Food("quinoa", 10);
    food2 = new Food("chezzeburgerz", 10);
    task1 = new Task("rescue princess", 1, 5, 10);
    task2 = new Task("rescue princess", 3, 1, 100);
    task3 = new Task("rescue princess", 2, 2, 50);
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

  it("hero like favorite food", function() {
    assert.equal("deadflies", hero2.favoriteFood)
  } )

  it("hero has greeting", function() {
    assert.equal("Good day sir, I am Ser Nardinold and will now slay you!", hero.greeting())
  })

  it("hero has greeting", function() {
    assert.equal("Good day sir, I am Ser Peter no pants and will now slay you!", hero2.greeting())
  })

  it("hero has an array of tasks", function() {
    assert.equal(0, hero.taskArray.length)
  })

  it("hero can add tasks to task", function() {
   hero.addTask(task),
   assert.equal(1, hero.taskArray.length)
 })

  it("hero can eat food", function() {
    hero.eatFood(food);
    assert.equal(110, hero.health)
  })

  it("hero gets super boost from fav foods", function() {
    hero.eatFood(food2);
    assert.equal(115, hero.health)
  })

  it("add tasks to task array", function() {
    hero.addTask(task),
    hero.addTask(task2),
    hero.addTask(task3),
    assert.equal(3, hero.taskArray.length)
  })

  it("display taskArray contents", function() {
    hero.addTask(task),
    hero.addTask(task2),
    assert.equal("title: rescue princess, difficulty: 1, urgency: 5, reward: 10", hero.getTaskDetails()[0])
  })

  // it("sort tasks by difficulty", function(){
  //   hero.addTask(task),
  //   hero.addTask(task2),
  //   hero.addTask(task3),
  // })

})
