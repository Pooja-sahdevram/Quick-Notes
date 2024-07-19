let tindarUser = new Object();
tindarUser.name = "username";
tindarUser.login = false;
tindarUser.age = 20;

let regularuser = {
  fullname: {
    username: "pooja",
  },
  age: 18,

  address: {
    pincode: 200000,
    city: "jaipur",
  },
};
let obj3 = Object.assign({}, tindarUser, regularuser);
let { age } = tindarUser;
console.log(age);

function hhh(k) {
  console.log(k);
}

hhh((company = "hhh"));
console.log(company);
