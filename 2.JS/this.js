// let person = {
//   name: "pooja",
//   age: 18,
//   showdata() {
//     console.log(this);
//   },
// };
// person.showdata();

// function greet() {
//   console.log(this);
// }

// greet();

//in callabck fxnn this refers to gobal or window obj
let obj = {
  arr: [5, 7, 5, 4, 7, 8],
  show() {
    this.arr.forEach(function (e) {
      console.log(this);
    }, {}); //====>>in this either you can pass obj or this if this pass then it has cotext of outer obj otehr wise ifs you give the obj it has contecct of the given obj
  },
};
obj.show();
