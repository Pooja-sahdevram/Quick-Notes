//filter
let mynum = [1, 2, 3, 45, 6, 78, 9, 10];
let x = mynum.filter((element) => element > 4);
console.log(x);
//
let books = [
  { bookname: "English 1", genre: "History", Publish: 1987 },
  { bookname: "English 1", genre: "History", Publish: 1987 },
  { bookname: "English 1", genre: "Hindi", Publish: 1987 },
  { bookname: "English 1", genre: "HistorHy", Publish: 1987 },
  { bookname: "English 1", genre: "History", Publish: 1987 },
  { bookname: "English 1", genre: "History", Publish: 1987 },
  { bookname: "English 1", genre: "History", Publish: 1987 },
  { bookname: "English 1", genre: "History", Publish: 1987 },
  { bookname: "English 1", genre: "History", Publish: 4999 },
  { bookname: "Hindi 1", genre: "History", Publish: 1987 },
  { bookname: "English 1", genre: "History", Publish: 1987 },
  { bookname: "English 1", genre: "History", Publish: 1876 },
];
let x1 = books.filter((bk) => bk.Publish); //full
let x2 = books.filter(
  (bk) => (bk.Publish > 1876 && bk.genre == "Hindi") || bk.bookname == "HIndi"
);

console.log(x2);

//map

let myarray2 = [5, 10, 15, 20];
console.log(
  myarray2
    .map((element) => element * 2)
    .map((e) => e * 2)
    .filter((e) => e > 30)
);

//reduce => it has a accumulator a current array value and a initlial value

let initlialvalue = -88;
console.log(myarray2.reduce((acc, curr) => acc + curr, initlialvalue));

let shoppingcard = [
  {
    cousename: "js",
    price: 550,
  },
  {
    cousename: "js",
    price: 550,
  },
  {
    cousename: "js",
    price: 550,
  },
  {
    cousename: "js",
    price: 550,
  },
  {
    cousename: "js",
    price: 550,
  },
];
let pay = shoppingcard.reduce(
  (acc, curitemprice) => acc + curitemprice.price,
  0
);
console.log(`Bill is ${pay}`);
