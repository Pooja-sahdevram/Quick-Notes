let num1 = 4;
let num2 = 3;

function findPower(number, power) {
  if (power == 0) {
    return 1;
  }
  return number * findPower(number, power - 1);
}
console.log(findPower(num1, num2));
