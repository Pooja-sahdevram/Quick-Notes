let x = 15;
let count = 0;
function checkpowerof_Two() {
  if (x & 1) {
    console.log("not power of 2");
  } else {
    while (x != 0) {
      if ((x & 1) == 1) {
        count++;
      }

      x = x >> 1;
    }
    if (count > 1) {
      console.log("not power of 2");
    } else {
      console.log("power of 2");
    }
  }
}
checkpowerof_Two();
