'use strict';
/*var menu = {
  width: 300,
  height: 200,
  title: "Menu"
};

function multiplyNumeric(obj) {
  for (var key in obj) {
    if (isNumeric(obj[key])) {
      obj[key] *=2;
    }
  }
  return obj;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

console.log(multiplyNumeric(menu));*/
/*var styles = [
  'Jazz',
  'Blues'
];

styles.push('rocknroll');
console.log(styles);
styles[styles.length-2] = 'classic';
console.log(styles);
console.log(styles.shift());
console.log(styles);
console.log(styles.unshift('rap', 'pop'));
console.log(styles);*/

var some = ["Яблоко", 'hui', "Апельсин", "Груша", "Лимон", 'blah', 'juice', 'random', 'fuck you'];

function getRandom(arr) {
  var randomKey = Math.floor(Math.random() * arr.length);
  return arr[randomKey];
}
console.log(getRandom(some));
