let array1 = new Array();
array1.push(1, 2, 3, 4, 8);
console.log(array1);
array1.forEach((elment) => {
  console.log(elment ** 2);
});

function printme(item) {
  console.log(item);
}
array1.forEach(printme);

array1.forEach((item, index, arr) => {
  console.log(
    ` At ${index} value is ${item} and its cube is ${
      item ** 3
    } from the array ${arr}`
  );
});

let mycoding = [
  { language: "javascript", file: "js " },
  { language: "C", file: "c++" },
  { language: "java", file: "java" },
];
mycoding.forEach((elment) => {
  console.log(`Language is ${elment.language} and filename is ${elment.file} `);
});
