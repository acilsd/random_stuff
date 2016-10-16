var names = 'masha, petya, dima, vasya';
var arr = names.split(', '); //разделение строки в массив как ПХП
for (var i = 0; i < arr.length; i++){
  console.log('You have a message ' + arr[i]);
};
var str = 'test';
console.log(str.split(''));//t, e, s, t

//---- JOIN
var mss = arr.join(';');
console.log(mss);
//
var str = 'lorem ipsum dolor ets emet';
var array = str.split(' ').reverse().join(' ');
console.log(array);
//
var sampleArray = ['0mad', '1afawf', '2aflgawf', '3lorem', '4sex']; //удаление с указанием позиции
var deleted = sampleArray.splice(1, 1); // с позиции 1 удалить 1 элемент
console.log(sampleArray);
console.log(deleted);

//
var newArray = ['sample', 'word', 'replace', 'stuff', 'blah'];
newArray.splice(0, 3, 'new', 'world'); //удалить первые 3 элемента и вставить вместо них другие
console.log(newArray);
//
var againArray = ['lorem', 'ipsum', 'bllah', 'blahblah'];
var copy = againArray.slice(1, 3); //копирует 1 и 3 в новый массив
var copyAll = againArray.slice();
console.log(copy); */
//
//SORT

var newArray = [1, 2, 15, 26, 091, 3, 16];

newArray.sort(function(a, b){
  ///if (a > b) {return 1};
  //if (a < b) {return -1};
  //return 0;
  return a - b; //по возрастанию,тоже самое,что с if
});
console.log(newArray);

var newArray = [1, 22, 156, 26, 'string', 091, 'ohshit', 3, 16, 'daml'];

newArray.sort(function(a, b){
  if (+a && +b){
    return b - a;
  } else
  if (+b) {
    return -1;
  } else {
    return 1;
  }
});
console.log(newArray);
//----------
var arr = [1, 2];
var newArr = arr.concat(3, 4);
//----------
 var arr = [1, 2, 4, 5, 6];
console.log(arr.indexOf(0));//1*/
//----------
 var user = {
  name: 'name',
  age: 90
};
var keys = Object.keys(user);
console.log(keys); //массив названий ключей*/
//---------------

 function addClass(obj, cls){
    var classes = obj.className ? obj.className.split(' ') : []; //проверяем,существует ли класснейм в массиве уже и если нет присваиваем пустой массив
    for (var i = 0; i < classes.length; i++){ //проходимся по каждому эл массива и сверяем
      if(classes[i] == cls) return; //если он уже есть просто ретерн
    }
    classes.push(cls); //если нет то пушим

    obj.className = classes.join(' ');
}

var obj = {
  className: 'open menu'
};

addClass(obj, 'open');
addClass(obj, 'new');
addClass(obj, 'and');

console.log(obj.className);
//-------------------------
//-------------------------
 function toCamelCase(str){
  var arr = str.split('-');
  for (var i = 1; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join('');
};*/

//ПЕРЕБОР МАССИВА
 var arr = ['waf', 'afwfwa', 'hslkhhs', -2, 5, -19];
arr.forEach(function(item, i, arr){
  console.log(item);
});

var positiveArr = arr.filter(function(number){
  return number > 0;
});
console.log(positiveArr);//положительные числа* */
//------------------
