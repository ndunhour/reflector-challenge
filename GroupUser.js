//create GroupUser class with two parameters - userName, password
var User = require('./User');

function GroupUser(something) {
  this._something = something;
  User.call(this, this.fName, this.lName, this.empNum);
}

//groupUser extend from user class
GroupUser.prototype = Object.create(User.prototype, {
  constructor: {
    value: GroupUser
  }
});

// create class method
GroupUser.prototype.anything = function(userName) {
  return 'dont know what im doing!!! ', userName;
};



var naomiGroup = new GroupUser('WTF');


module.exports = GroupUser;