let arr = [1, 2, 2, 1, 3, 5, 8, 5, 8, 5, 15, 3];
let x = -1;
for (let i = 0; i < arr.length; i++) {
  let flag = true;
  for (let j = 0; j < arr.length; j++) {
    if (i != j && arr[i] == arr[j]) {
      flag = false;
      break;
    }
  }
  if (flag) {
    x = arr[i];
  }
}

//in simple way
let v = 5 ^ 2 ^ 5;
console.log(v);
