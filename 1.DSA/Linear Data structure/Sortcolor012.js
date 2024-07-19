let a = [0, 0, 2, 1, 1, 2];
let low = 0;
let j = a.length - 1;
let i = 0;

while (i <= j) {
  if (a[i] == 1) {
    i++;
  } else if (a[i] == 0) {
    let temp = a[i];
    a[i] = a[low];
    a[low] = temp;
    i++;
    low++;
  } else if (a[i] == 2) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    j--;
  }
}
console.log(a



  
);
