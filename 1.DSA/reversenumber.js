let value = 12111;
let result = 0;
let last_digit = 0;
function example() {
  while (value != 0) {
    last_digit = value % 10;
    if (result < Number.MIN_VALUE / 10 || result > Number.MAX_VALUE / 10) {
      return 0;
    }
    result = result * 10 + last_digit;
    value = Math.floor(value / 10);
  }
}
example();
console.log(result);
