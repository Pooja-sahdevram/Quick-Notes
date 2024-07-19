let value = 1010;
let result = 0;
let index = 0;
function binarytodecimal() {
  while (value != 0) {
    let lastbit = value % 10;
    console.log("last bit \t " + lastbit);
    if (lastbit == 1) {
      result += lastbit * 2 ** index;
    }
    index++;
    value = Math.floor(value / 10);
  }
}
binarytodecimal();
console.log(result);
