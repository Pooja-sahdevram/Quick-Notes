let arr = [9, 2, 3, 4, 5];
let target = 5;
let ans1, ans2;

for (let i = 0; i < arr.length; i++) {
  if (target > arr[i]) {
    let start = i;
    let nexttarget = target - arr[start];
    for (let j = 0; j < arr.length; j++) {
      if (nexttarget == arr[j]) {
        ans2 = arr[j];
        ans1 = arr[i];
        break;
      }
    }
  }
}

console.log(ans1, ans2);
