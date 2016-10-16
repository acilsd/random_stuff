//уникальные элементы массива

var strings = ['result', 'xape', 'xape', 'xape', 'fail', 'fail', '5', ':D', '5', 5, 'cirimnal'];

function unique(src) {
  var result = [];

  nextItem:

    for (var i = 0; i < src.length; i++){
      var string = src[i];

      for (var j = 0; j < result.length; j++){
        if (result[j] == string) continue nextItem
      }
      result.push(string);
    }

  return result;
};

console.log(unique(strings));

//получить массив с уникальными именами класса, отсортированными по частоте использования.
var classNames = ['header', 'menu', 'menu__item', 'menu__item', 'menu__item',
                  'link', 'link', 'link__type-red', 'footer', 'tabs', 'tabs', 'tabs', 'tabs', 'tabs', 'tabs', 'tab__item', 'tab__item',
                  'tab__item', 'tab__item', 'img'];

var classesObj = {};

classNames.forEach(function(elem) {
  if (!classesObj[elem]) {
    classesObj[elem] = 1;
  } else {
    classesObj[elem] +=1;
  }
});

var result = [];

for (className in classesObj) {
  result.push(className);
};

result.sort(function(a, b) {
  return classesObj[b] - classesObj[a];
});

console.log(classesObj);
console.log(result);

//-----------------
//проверка на анаграммы
var arr = ['воз', 'киборг', 'костер', 'сектор', 'гробик', 'корсет', 'зов'];
function anClean(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var sorted = arr[i].toLowerCase().split('').sort().join('');
    obj[sorted] = arr[i];
  }
  console.log(obj);
  var result = [];
  for (var key in obj) {
    result.push(obj[key]);
  }

  return result;
};
console.log(anClean(arr));
//
//-----------
//
//
