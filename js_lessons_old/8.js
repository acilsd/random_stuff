var calculator = {
  read: function() {
    this.a = +prompt("a: ");
    this.b = +prompt("b: ");
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a * this.b;
  }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

///////-------------
//
//
function User(userData) {
  if (userData) {
    this.name = userData.name;
    this.age = userData.age;
  } else {
    this.name = 'Anon';
  }

  this.sayHi = function() {
    console.log(this.name);
  };
}

var guest = new User();
guest.sayHi();

var rUser = new User({
  name: 'vasya',
  age: 19
});
rUser.sayHi();

//
function User() {
  this.sayHi = function() {
    console.log(this.name);
  };
};

User.createAnonimous = function() {
  var user = new User;
  user.name = 'Anon';
  return user;
};

User.createFromData = function(userData) {
  var user = new User;
  user.name = userData.name;
  user.age = userData.age;
  return user;
};

var guest = User.createAnonimous();
guest.sayHi();

var realUser = User.createFromData({
  name: 'Vasya',
  age: 95
});
realUser.sayHi();
