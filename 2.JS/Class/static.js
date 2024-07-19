//static fucntion can use by

class User {
  constructor(n, e, r) {
    (this.n = n), (this.e = e), (this.r = r);
  }

  static keyyy() {
    return "123";
  }
}
let user1 = new User();
console.log(User.keyyy());
