let date = new Date("2023-01-01");

let array1 = new Array(8).fill(5);
let array2 = new Array(7).fill(10);
// console.log(array1.splice(1, 4));
console.log([...array1, [...array2]]);
