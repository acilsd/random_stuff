'use strict';
function User() {
  var firstName,
      surName;

  this.setFirstName = function(name) {
    firstName = name;
  };

  this.setSurName = function(name) {
    surName = name;
  };

  this.getFullName = function() {
    return firstName + ' ' + surName;
  };
}

var user = new User();


user.setFirstName('Vasya');
user.setSurName('Petrov');
user.getFullName();
console.log(user);
