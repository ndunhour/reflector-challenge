/*

var Reflector = function(obj) {
  this.getProperties = function() {
    var properties = [];
    for (var prop in obj) {
      if (typeof obj[prop] != 'function') {
        properties.push(prop);
      }
    }
    return properties;
  };
}

var reflector = new Reflector(rob);
document.write('<p>Person class properties:</p>');
document.write(reflector.getProperties().join('<br/>'));


The above code produces the following:
Person class properties:
phoneNumber
address

*/

var User = require('./User.js');
var GroupUser = require('./GroupUser');
var SuperUser = require('./SuperUser');


function Reflector(obj) {
  if(Object.getPrototypeOf(obj) !== null) {
    console.log('testing the obj', obj.constructor.name);
    console.log(Object.keys(obj)); // methods
    Reflector(Object.getPrototypeOf(obj));

  }

}
var email = new GroupUser('dontGetIt', '123QWE');
var lunch = new SuperUser('chicken');
var naomi = new User('naomi', 'owens', 123);

// var plsWork = Reflector(Object.getPrototypeOf(email));


Reflector(lunch);

