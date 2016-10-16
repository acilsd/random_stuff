'use strict';
//DEBOUNCE

function func(x) {
  console.log(x);
}

function debounce(f, time) {
  var state = true;

  return function() {

      if(!state) return;

      f.apply(this, arguments);

      state = false;

      setTimeout(function() {
        state = true;
      }, time);
  }
};

var func1 = debounce(func, 1000);

func1(1);
func1(2);

setTimeout( function() { func1(3) }, 100);
setTimeout( function() { func1(4) }, 1100);
setTimeout( function() { func1(5) }, 1500);
setTimeout( function() { func1(6) }, 2000);
setTimeout( function() { func1(7) }, 4000);
