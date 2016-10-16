//сортировка строк
function order(words){
  var ordered = [];
  var arr = words.split(' ');
  console.log(arr);
  var n = 1;
  while (n <= arr.length) {
    for (var i = 0; i < arr.length; i++) {
      var stringArr = arr[i].split('');
      console.log(stringArr);
      stringArr.forEach(function(currentValue, index) {
      if (parseInt(currentValue) === n) {
        ordered.push(arr[i]);
        n++;
       }
    });
   }
 }
  return ordered.join(' ');
}

//так правильнее
/*function order(words) {
  var array = words.split(' ');
  var sortedArray = [];
  for(var i = 0; i <= array.length; i++) {
    for(var j = 0; j < array.length; j++) {
      if(array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}*/

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log("");
