function CardItem(...args) {
  console.log(args.flat(Infinity));
  var x = 5;
}

let user = {
  price: 55,
  age: 55,
};
CardItem([5, 8, 7, [9, 5, [5, , 6]], 6]);
console.log(x);
