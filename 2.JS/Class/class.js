//class are syntatic sugar
//constructor call when  an instance created by using new
//not the nassary to write constructor
class User {
  constructor(username, email, password) {
    this.username = username;
    (this.email = email), (this.password = password);
  }

  encryptPassword() {
    return `passwords is ${this.password}abc`;
  }

  UpperName() {
    return `Username is ${this.username.toUpperCase()}`;
  }
}

let user1 = new User("pinki", "pinkkumari@212", 6546546);
console.log(user1.encryptPassword());
console.log(user1.UpperName());

//without class //behind the scene

function UserBYNotClass(username, email, password) {
  (this.username = username), (this.email = email), (this.password = password);
}
Function.prototype.UpperName = function () {
  return `Username is ${this.username.toUpperCase()}`;
};
Function.prototype.encryptPassword = function () {
  return `passwords is ${this.password}abc`;
};

let userX = new UserBYNotClass("shyan", "S1132", 8745);
console.log(userX.password());
console.log();
