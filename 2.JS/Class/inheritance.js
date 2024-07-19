//extends=>inheritance
//super used behind the scene
class Teacher {
  constructor(username) {
    this.username = username;
  }
  getname() {
    console.log("name is ", this.username);
  }
}
class courses extends Teacher {
  constructor(username, mail, password) {
    super(username);
    this.mail = mail;
    this.password = password;
  }
  getdata() {
    console.log(`${this.mail} ${this.password}abc`);
  }
}
let teachercourse = new courses("riya", "riya@gmail.com", 12358);
let teacher = new Teacher("Sufyan");
teachercourse.getdata();
teacher.getname();
