let x = 15;
let divide = x;
let remainder = "";
let result = 0;
function countOne() {
  while (divide >= 1) {
    remainder += divide % 2;
    divide = Math.floor(divide / 2);
  }
  while (x != 0) {
    if ((x & 1) == 1) {
      result++;
    }
    x = x >> 1;
  }
  console.log(result);
}

countOne();
