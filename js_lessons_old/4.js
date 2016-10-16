var arr = [];
var fruits = ['apple', 'orange', 'banana'];
console.log(fruits[0]);
fruits[2] = 'pineapple';
console.log(fruits[2]);
console.log(fruits.length);

//pop удаляет последний элемент из массива
console.log(fruits.pop());//удалили банан
console.log(fruits);//apple, orange
//push добавляет в конец массива
fruits.push('newfruit');
console.log(fruits);
fruits.push('apple', 'peach');
console.log(fruits);
//-----------------
//shift удаляет первый unshift добаялвет в начало
console.log(fruits.shift());//-apple
console.log(fruits);
fruits.unshift('apple');
console.log(fruits);

for(var i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
};
//ПЕРЕБОРФУНКЦИЕЙ
var newArray = ['a', 'b', 'c', 'd'];
function arrLog(item, i){
  console.log(item, i);
}
newArray.forEach(arrLog);


//длина
var arr = [1, 2, 3, 4, 5, 6];
arr.length = 2; //укоротить до 2 элементов
//еще создаем
var arr = new Array(2, 3);
//МНОГОМЕРНЫЕ МАССИВЫ
var matrix = [
  [1, 2, 3],
  [9, 8, 7],
  [5, 6, 4]
];
console.log(matrix[1][1]);//8

//------------------------------//
//-----------------------------------//

var arr = [124, 125451, 12, 125, 6, 8, 112, 256];
function getLastItem(array){
  return array[array.length-1];
};
console.log(getLastItem(arr)); //256, последний элемент

//--------------------------------
var arr = ['1', '2', '6', '21', '66', '1214'];
var elem = 256;
var newElem = 652;

function pushItem(array, item){
  array.push(item);
  return array;
};
console.log(pushItem(arr, newElem));

//-------------------------
var fruits = ['apple', 'orange'];
fruits.push('kiwi');
console.log(fruits);
fruits[fruits.length-2] = 'peach';
console.log(fruits);
console.log(fruits.shift());
fruits.unshift('appricot', 'peach');
console.log(fruits);
//-----------------------------
//случайное значение из массива
function getRandomEl(array){
  var max = array.length - 1;
  var rand = Math.floor(Math.random() * (max + 1));
  return array[rand];
};
var arr = ['a', 'b', 'e'];
console.log(getRandomEl(arr));
