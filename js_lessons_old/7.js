//global object
function add(a, b) {
  return a + b;
};

function mul(a, b) {
  return a * b;
};

function applyF(binaryFunc) {
  return function(a) {
    return function(b) {
      return binaryFunc(a, b);
    }
  }
};

var addFunc = applyF(add);
console.log(addFunc(2)(3));
console.log(applyF(mul)(3)(4));
