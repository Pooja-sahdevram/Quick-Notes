let result = [0];
let value = 15;

function something(value) {
  let count = 0;
  while (value != 0) {
    if ((value & 1) == 1) {
      count++;
    }
    value = value >> 1;
  }
  result.push(count);
}
for (let i = 1; i <= value; i++) {
  something(i);
}

console.log(result);
