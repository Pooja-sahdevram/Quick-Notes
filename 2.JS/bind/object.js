const m = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(m);

let pi = {
  cahi: "tea",
  price: 55,
  isAvailable: true,

  ybaby() {
    console.log("hmm aa gya ");
  },
};

console.log(Object.getOwnPropertyDescriptor(pi, "cahi"));
Object.defineProperty(pi, "price", {
  value: 55,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(pi, "price"));
for (let [key, value] of Object.entries(pi)) {
  if (typeof value !== "function") {
    console.log(`${key} is ${value}`);
  }
}
