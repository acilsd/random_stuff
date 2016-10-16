'use strict';
/*function printArgs() {
  var args = [].slice.call(arguments);
  console.log(args.join('. '));
}

printArgs('hi', 'world', 'lol', 'blya');*/

//декоратор

function someFunction(text) {
  console.log('string' + text);
  return 2;
}

function anotherFunction(text) {
  console.log('sometext' + text);
  return 100;
}

function decorator(func) {
  return function() {
    console.log('<OPACHA></OPACHA>');
    return func.apply(this, arguments);
  }
}

someFunction = decorator(someFunction);
anotherFunction = decorator(anotherFunction);

console.log(someFunction(' hello world'));
console.log(anotherFunction(' poshel nahui'));
