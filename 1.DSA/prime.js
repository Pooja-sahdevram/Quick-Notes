function isPrime(n) {
  let i;
  for (i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      return 0;
    }
  }
  return n;
}
let n = 10;
let array = [];
for (let i = 2; i < n; i++) {
  if (isPrime(i)) {
    array.push(isPrime(i));
  }
}
console.log(array);
