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



var userClasses = requires('./userClasses');

var Reflector = function (obj) {

};

var naomi = new User('naomi', 'owens', 123);
var email = new GroupUser('dontGetIt', '123QWE');
var lunch = new SuperUser('chicken');

console.log(naomi);
console.log(email);
console.log(lunch);