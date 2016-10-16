'use strict';

//функция которая возвращает массив функций которые возвращают свой индекс внутри этого массива

/*function createFunction(n) {
  var callbacks = [];

  for (var i = 0; i < n; i++) {
    (function (i) {
      callbacks.push(function() {
        return i;
      });
    })(i);
  }
  return callbacks;
}

var callbacksArr = createFunction(5);
console.log(callbacksArr[0]());
console.log(callbacksArr[1]());
console.log(callbacksArr[2]());
console.log(callbacksArr[3]());
console.log(callbacksArr[4]()); */

//
//lazy
//
function add(a, b) {
  return a + b;
}
function double(n) {
  return n*2;
}

var makeLazy = function() {

  var operation = arguments[0];
  console.log(operation);
  var args = [].splice.call(arguments, 1);
  console.log(args);

  return function() {
    return operation.apply(arguments, args);
  }
};

var lazyValue2 = makeLazy(double, 5);
var lazyValue = makeLazy(add, 2, 3);
console.log(lazyValue());
console.log(lazyValue2());
