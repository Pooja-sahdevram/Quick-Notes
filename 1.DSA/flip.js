let x;
let result = "";
let index = 0;
x = 5;
console.log("Actual number is " + x);
function main() {
  while (x != 0) {
    if (x & (1 == 1)) {
      result += 0;
    } else {
      result += 1;
    }

    x = x >> 1;
  }

  let newnumber = result.split("").reverse().join("") * 1;
  console.log("New number " + newnumber);
  result = 0;
  while (newnumber != 0) {
    let lastbit = newnumber % 10;
    result += lastbit * 2 ** index;
    index++;
    newnumber = Math.floor(newnumber / 10);
  }
  console.log(result);
}
main();
