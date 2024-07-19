// for of loop : object ,array , anything

const arr = [1, 2, 3, 4, 5, 5];

for (const num of arr) {
  console.log(num);
}

const name = "sufi poooja";
for (let i of name) {
  console.log(i);
}

let object1 = {
  name: "riya",
  age: 18,
};

let { age } = object1;
console.log(age);
