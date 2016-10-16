'use strict';
//*recursive settimeout
/*var timerId = setTimeout(function tick() {
  console.log('piu');
  timerId = setTimeout(tick, 2000);
}, 2000);*/

function delay(func, time) {
  return function() {
    var args = arguments;
    var ctx = this;

    setTimeout(function() {
      func.apply(ctx, args);
    }, time);
  }
};

function f(x) {
  console.log('hello: ' + x);
};

var f1000 = delay(f, 1000);

f1000('test');
