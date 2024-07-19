let x = 19;
let result = "";
function xyz() {
  while (x != 0) {
    result += x & 1 ? 1 : 0;
    x = x >> 1;
  }
}
xyz();
console.log(result.split("").reverse().join(""));
