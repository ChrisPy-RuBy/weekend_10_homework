var _ = require("lodash")


var Task = function(title, difficulty, urgency, reward) {
  this.title = title;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.taskStatus = false;  
}

  Task.prototype = {
    taskComplete: function() {
      this.taskStatus = true;
    },

    taskDetails: function() {
      return "title: " + this.title + ", difficulty: " + this.difficulty + ", urgency: " + this.urgency + ", reward: " + this.reward
    }
    // "title: rescue princess, difficulty: 1, urgency: 5, reward: 10",
  }

module.exports = Task;