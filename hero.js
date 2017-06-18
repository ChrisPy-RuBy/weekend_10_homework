var _ = require("lodash")


var Hero = function(name, favoriteFood) {
  this.name = name;
  this.health = 100;
  this.favoriteFood = favoriteFood;
  this.taskArray = [];
}

Hero.prototype = {
  greeting: function() {
    return "Good day sir, I am Ser " + this.name + " and will now slay you!";
  },
  addTask: function(task) {
    this.taskArray.push(task);
  },
  eatFood: function(food) {
    if(food.name == this.favoriteFood) {
      this.health += (food.replenishmentValue * 1.5);
    }
    else {
      this.health += food.replenishmentValue;
    }
  },
  getTaskDetails: function() {
    for (task in this.taskArray) {
      return taskDetails();
    }

  }
}

module.exports = Hero;


// listInventory: function() {
//   var inventoryList = this.inventory.map(function(record) {
//     return record.prettyPrint()
//   })
//   return inventoryList
// },
// RecordCollector.prototype = {
//   buyRecord: function(record) {
//     if (this.cash < record.price) {
//       return "Sorry you can't afford this record";
//     }
//     this.cash -= record.price;
//     this.collection.push(record);
//   },