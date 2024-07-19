// function m5(n) {
//   return n * 5;
// }
// m5.power = 2;
// console.log(m5(5));
// console.log(m5.power);
// console.log(m5.prototype);

// //prototype new this constructor function
// function CreateUser(usename, score) {
//   (this.usename = usename), (this.score = score);
// }

// CreateUser.prototype.increment = function () {
//   this.score++;
// };
// CreateUser.prototype.printme = function () {
//   console.log(`the score is ${this.score}`);
// };
// let x1 = new CreateUser("pooja", 5);
// let x2 = new CreateUser("Shamreen", 3);
// x1.printme();
// x1.increment();
// x1.printme();

// //object protype inject a function
// let x = [5, 6, 5, 7, 8, 9];

// let phone = {
//   id: 54454545,
//   model: 5,
// };
// Object.prototype.getlength = function () {
//   console.log(`${this.length}`);
// };
// phone.getlength();
// x.getlength();
// Array.prototype.llength = function () {
//   console.log(`${this.length}`);
// };
// x1.getlength();
// x.llength();
// //inheritance

// let object1 = {
//   Tname: "teacher",
// };
// let object2 = {
//   Sname: "Student",
//   __proto__: object1,
// };
// console.log(object2.Tname);

// //mordan syntax
// let example1 = {
//   example11: "Herohonda",
// };
// let example2 = {
//   exaampke2: "bike",
// };
// Object.setPrototypeOf(example2, example1);
// console.log(example2.example11);

let name = "     pooja";
let secondname = "    sahdev ram";

String.prototype.newlength = function () {
  console.log("length is the ", this.trim().length);
};
name.newlength();
secondname.newlength();
