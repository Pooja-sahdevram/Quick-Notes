let x = 18;
let divide = x;
let remainder = [];
let count = 0;
function dkjehc() {
  while (divide >= 1) {
    remainder.unshift(divide % 2);
    divide = Math.floor(divide / 2);
  }
  for (let i = 0; i < remainder.length; i++) {
    if (remainder[i] == 1) {
      count++;
    }
  }
  console.log(remainder);
}
dkjehc();
