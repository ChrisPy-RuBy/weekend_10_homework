var assert = require('assert')
var Task = require('../task.js')


describe('Task', function() {

var task;

beforeEach(function() {
  task1 = new Task("rescue princess", 1, 5, 10);
  task2 = new Task();
})

it("task has title", function() {
  assert.equal("rescue princess", task1.title)
})

it("task has difficult", function() {
  assert.equal(1, task1.difficulty)
})

it("task has an urgency", function() {
  assert.equal(5, task1.urgency)
})

it("task has reward", function() {
  assert.equal(10, task1.reward)
})

it("check task status", function() {
  assert.equal(false, task1.taskStatus)
})

it("can update task status", function() {
  task1.taskComplete();
  assert.equal(true, task1.taskStatus)
})

it("display task details", function() {
  assert.equal("title: rescue princess, difficulty: 1, urgency: 5, reward: 10", task1.taskDetails())
})
})