'use strict';
//this call apply
var a = ['a', 'b', 'c'];
var b = [];

for(var i = 0; i < a.length; i++) {
  b[i] = a[i];
}
console.log(b);

function equalArrays(a, b) {
  if (a.length != b.length) {
    return false;
  }
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(equalArrays(a, b));
console.log(a.toString());
