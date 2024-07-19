function add(...args) {
  return args.reduce((acc, curr) => (acc += curr), 0);
}

function increment(val) {
  return ++val;
}

function generic(...fun) {
  return function (...val) {
    // Apply the functions from right to left
    return fun.reduceRight((a, b) => b(a), add(...val));
  };
}

let x = generic(increment);
console.log(x(2, 3)); // Expected output: 6
