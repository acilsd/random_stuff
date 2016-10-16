var myObject = {
  'firstProperty': 'value', //string
  'secondProperty': 'second-value',
  'numericProperty': 42, //nubmer
  'objectProperty': { //object
    'internalObject': [1, 2, 3] //interntal massive
  }
};

//проверка на число ПОЛЕЗНО
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

var obj = {
  prop: 1
};
//обращаемся к ключу объекта
obj.prop;
//или
obj['prop'];

var obj = {
  prop1: 1,
  prop2: 2,
  prop3: 3,
  'complex prop s kuchey+vsyakoy huiny)': true
};

//вычисление ключа через конкатенацию ГОВНОЖОПА
for (var i = 1; i <= 3; i++) {
  obj['prop' + i];
  console.log('prop' + i);
}
//обращаемся к сложному говноключу
obj['complex prop s kuchey+vsyakoy huiny)'];
/*  ======================================== */

var myObject = {
  someProp: 1,
  anotherProp: 2
};

'someProp' in myObject; //true

for (var prop in myObject) {
  prop; //ключ
  myObject[prop]; //значение ключа
};

/*==================================*/
//функция в объекте
var obj = {
  doSomething: function(){
    console.log('something');
  }
};
typeof obj.doSomething; //'function'
obj.doSomething(); //'something'


/*====================================*/

var table = {
  color: 'black', //это свойство объекта
  legsCount: 4, //и это
  paint: function(color){ //функция "покраска стола" - метод,управляющий свойствами объекта
    this.color = color; //this ссылается на объект
  }
};
table.color; //'black'
table.paint('red');
table.color; //"red"

/*==========================================*/
//DOM tree объектная модель документа. Каждому тегу на странице в соответствие ставится свой объект, Свойства объекта - его атрибуты//

//корневой элемент ДОМдерева - объект document
document;
document.body;

var logo = document.body.querySelector('.logo img');

console.log(logo);

logo.src = 'https://sample.com/new-logo.png'; //сменили картинку


//-----------------------------------------------
var x = prompt('Enter X', '');
switch(x) {
  case '0':
  case '1':
    alert('One or Two');
    break;
  case '2':
    alert('Two');
    break;
  case '3':
    alert('Three');
    break;
  default:
    alert('Big Number!');
}

var browser = prompt('Enter your browser: ');
switch(browser) {
  case 'IE':
    alert('О, да у вас ИШАК!');
    break;
  case 'Chrome':
    alert('ХРОМОГ!');
    break;
  case 'Firefox':
    alert('ЛИСА');
    break;
  default:
    alert('Какой-то илитный браузер...');
}

//-----------------------------
var i = 0;
while (i <= 12) {
  console.log(i);
  i++;
};

var i;
for (i = 0; i < 3; i++) {
  console.log(i);
};
for (var i =0;  i < 3; i++) {
  console.log(i);
};

var result = 1;
for (var counter = 0; counter < 10; counter++) {
  result = result*2;
};
console.log(result); //1024

for (var current = 20; ; current++) {
  if (current % 7 == 0) {
    break;
  }
};
console.log(current); //21

var sum = 0;
while(true) {
  var value = +prompt('Enter number', '');
  if(!value) break;//жмем кэнсел
  sum += value;
};
console.log(sum);

for(var i = 0; i < 10; i++) {
  if(i % 2 == 0) {continue;}
  console.log(i);
};


for(var i = 2; i <=10; i+=2) {
  console.log(i);
};

var a='';
for(var i=0; i<=7; i++) {
  a+='#';
  console.log(a);
};

//---------------------------------------------------
function showMessage(){
  alert('Hello World');
};
