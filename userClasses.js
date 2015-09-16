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





/*--------------------------------------*/


/*--------------------------------------*/

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

//module.exports = userClasses;