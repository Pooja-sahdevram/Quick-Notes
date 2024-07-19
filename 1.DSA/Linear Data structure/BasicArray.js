// let arr = new Array(5).fill(0);
// arr[5] = 4445;
// let arr1 = Array(arr.length);
// arr1 = arr.map((element) => element);

// arr = arr1;
// console.log(arr);

//remove from sepcific
// let arr = [1, 2, 3, 4, 5];
// let v = 0;
// for (let i = v; i < arr.length; i++) {
//   arr[i] = arr[i + 1];
// }

//reverse by using n/2

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0, j = Math.floor(arr.length - 1); i < arr.length / 2; i++, j--) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
console.log(arr);
