function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}
let fact = 0;
console.log(factorial(15));
