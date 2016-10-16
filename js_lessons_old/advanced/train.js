'use strict';

var newArray = [
  1,
  2,
  1.5,
  4,
  10,
  50,
  255,
  5,
  7,
  9
];

function filterNums(arr, a, b) {
  var filtered = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <=b) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}

var sample = filterNums(newArray, 4, 50);
console.log(sample);
