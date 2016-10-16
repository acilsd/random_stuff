function pow(x, n){
  if(n!=1){
    return x*pow(x, n-1);
  }
  else {
    return x;
  }
}
console.log(pow(2, 3)); //8 два в степень три

function sumTo(x){
  if(x!=1){
    return x+sumTo(x-1);
  }
  else {
    return x;
  }
}
console.log(sumTo(3));//3+2+1
//------------------------------

var rndm = function SayHi(b) {};
//
//
//
//методы и свойства
console.log('Hello world'.length); //длина, 11
var text = 'Hello world';
console.log(text.length); //11

console.log(text.toUpperCase()); //HELLO WORLD
console.log(text.toLowerCase());//hello world

var n = 65.432;
console.log(n.toFixed(2));//65.43
console.log(n.toFixed(0));//65

console.log(1/0); //infinity
console.log(Infinity>12112124124412);//true
console.log(1e500);//infinity
var x = Infinity;

var n = 0;
console.log(n/0);//NaN

console.log(isNaN(n)); //true
console.log(isFinite(Infinity));//false
///

var s = '12.34';
console.log(+s);//12.34
console.log(+'12test');//NaN

console.log(parseInt('12px'));//12
console.log(parseInt('12.3.4'));//12.3
console.log(parseInt('a123'));//NaN

function isNumeric(n){
  return !isNan(parseFloat(n)) && isFinite(n);
}
console.log(isNumeric());

var n = 255;
console.log(n.toString(16));//ff

var n = 4;
console.log(n.toString(2));//100

console.log(Math.floor(3.5));//3
console.log(Math.ceil(3.5));//4
console.log(Math.round(3.5));//4
/////

console.log(0.1 + 0.2 == 0.3);//false
console.log(0.1 + 0.2);//0.300000000000004

function makeChess(size){
  for (var i = 0; i < size; i++){
    var line = '';
    for (var j = 0; j < size; j++){
      if (i % 2 === 0){
        if (j % 2 === 0){
          line += '#';
        } else {
          line += ' ';
        }
      } else {
        if (j % 2 === 0) {
          line += ' ';
        } else {
          line += '#';
        }
      }
    }
    console.log(line);
  }
}
makeChess(8);*/


var salaries = {
  'junior': 1000,
  'middle': 2500,
  'senior': 3500,
  'lead': 20000
};

function countAll(obj) {
  var sum = 0;
  for (var prop in salaries) {
    sum += salaries[prop];
  }
  return sum;
};
console.log(countAll(salaries));
