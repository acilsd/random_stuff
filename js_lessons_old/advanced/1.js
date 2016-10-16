'use strict';

function CoffeMachine(power) {
  this.waterAmount = 0;

  console.log('New CoffeMachine with power as: ' + power + 'W');

  var WATER_HEAT_CAPACITY = 100;

  function getBoilTime() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }
  function onReady() {
    console.log('Coffee is ready');
  }
  this.run = function() {
    setTimeout(onReady, getBoilTime.call(this));
  }
}

var coffeMachine = new CoffeMachine(100);

coffeMachine.waterAmount = 200;
console.log(coffeMachine);

coffeMachine.run();
