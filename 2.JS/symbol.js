let Mysymbol = Symbol("123");
let object1 = {
  [Mysymbol]: "pooooo",
  age: 5,
  greeting: function hello() {
    console.log("hello");
  },
  greeting: function hello(k) {
    console.log(this.age);
  },
};
let x = object1.greeting(5);
console.log(x);
