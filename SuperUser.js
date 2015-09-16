var GroupUser = require('./GroupUser');

//create SuperClass with one parameters -  network
function SuperUser() {
  GroupUser.call(this, this.something);
}

SuperUser.prototype = Object.create(GroupUser.prototype, {
  constructor: {
    value: SuperUser
  }
});
// create class method
SuperUser.prototype.network = function(food) {
  return 'i need lunch', food;
};

//superUser extends from groupUser class

module.exports = SuperUser;