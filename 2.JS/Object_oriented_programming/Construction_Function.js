// const promise1 = new Promise();
//new => constructor fucntion

function User(username, logncount, islogin) {
  (this.username = username), (this.logncount = logncount);
  this.islogin = islogin;

  //abstraction
  this.func = function greeting() {
    console.log("hello");
  };

  //   return this; ==>implicitly define likho mt likho
}
const user1 = new User("sufyan", 3, 1);
user1.func();
const user2 = new User("pooja", 888, 1);

console.log(user1.constructor);
