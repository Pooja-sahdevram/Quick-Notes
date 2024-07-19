let x1 = 10;

x = x1;
let mask = 0;
console.log("Actual number is " + x);
function main() {
  while (x != 0) {
    mask = (mask << 1) | 1;
    x = x >> 1;
  }

  console.log(~x1 & mask);
}
main();
