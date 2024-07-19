// dont want to access properties directly
//getter is default methord that prevent access by default
//setter is also default method that make set the prperties value
//synatx get set

//in class getter setter
class User {
  constructor(name, age, password) {
    (this.name = name), (this.age = age), (this.password = password);
  }
  get password() {
    return this._password;
  }
  set password(value) {
    return (this._password = value + "lllll");
  }

  get age() {
    return this.Email;
  }
  set age(v) {
    return (this.Email = v + "m.m,.");
  }
}

let user1 = new User("pooja", 5, 845454545);
console.log(user1);
console.log(user1.password);

//in function getter setter

function Video(name, description, type) {
  (this.name = name), (this.description = description), (this.type = type);

  Object.defineProperty(this, "description", {
    get: function description() {
      this._description = description + "end";
    },
    set: function description(v) {
      this._description = "************" + v + "***************";
    },
  });
}

let vide1 = new Video("JS", "hello js", "education");
console.log(vide1.description());
