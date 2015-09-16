//create User class with three parameter - firstName, lastName, employeeNumber(int)
function User(fName, lName, empNum) {
  this._fName = fName;
  this._lName = lName;
  this._empNum  = empNum;

}



 var naomi = new User('naomi', 'owens', 123);

module.exports = User;