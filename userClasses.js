/*
Your Tasks

1.  Create 3 classes:
      User
      GroupUser
      SuperUser
2.  Create a number of methods on the prototype of each class and create the following inheritance:
      GroupUser inherits from User
      SuperUser inherits from GroupUser
3.  Write a function called reflector that takes in an instance of an object and use console.log() to print
      out the name of the current class, and the methods and properties that belong to only that class.
4.  If this class inherits from another class, you should then repeat for each level of inheritance all
      the way up the prototype chain until you can't go any further.
5.  Don't forget to create this as a repository and push to your GitHub account with good naming convention.

*/


//create SuperClass with one parameters -  network
function SuperUser() {

}

// create class method
SuperUser.prototype.network = function(food) {
  return 'i need lunch', food;
};

//superUser extends from groupUser class
SuperUser.prototype = Object.create(GroupUser.prototype);



/*--------------------------------------*/
//create GroupUser class with two parameters - userName, password
function GroupUser() {

}

// create class method
GroupUser.prototype.network = function(userName) {
  return 'dont know what im doing!!! ', userName;
};
//groupUser extend from user class
GroupUser.prototype = Object.create(User.prototype);

/*--------------------------------------*/
//create User class with three parameter - firstName, lastName, employeeNumber(int)
function User(fName, lName, empNum) {
  this._fName = fName;
  this._lName = lName;
  this._empNum  = empNum;

}


/*--------------------------------------*/
//extending from other classes
function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
}

extend(SuperUser.prototype, GroupUser.prototype);
extend(GroupUser.prototype, User.prototype);
extend(User.prototype, GroupUser.prototype);
