'use strict';
function CoffeMachine(power, capacity) {
  var waterAmount = 0;
  var WATER_HEAT_CAPACITY = 1000;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY / power;
  };

  this.setWaterAmount = function(amount) {
    if(amount < 0) {
      throw new Error('Invalid amount of water!');
    }
    if(amount > capacity) {
      throw new Error('Too much water!');
    }
    waterAmount = amount;
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

  function onReady() {
    console.log('Coffee is ready!');
  };

  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };
}

var coffeMachine = new CoffeMachine(1000, 500);
coffeMachine.setWaterAmount(500);
coffeMachine.run();
