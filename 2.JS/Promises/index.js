// const promise1 = new Promise((res, rej) => {
//   //cryptography
//   //networkcall
//   //DB Calls
//   setTimeout(() => {
//     console.log("Aysnc Task is completed");
//     res();
//   }, 1000);
// });
// promise1
//   .then(() => {
//     console.log("resolve");
//     console.log("********************************************");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// console.log(promise1);
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//     console.log("Welcome");
//   }, 2000);
// })
//   .then(() => {
//     console.log("Resolve");
//   })
//   .catch((e) => {
//     console.log(`Error ${e}`);
//   });

// //ERRORS
// new Promise((res, rej) => {
//   let error = true;
//   if (!error) {
//     setTimeout(() => {
//       res({ name: "Pooja Sahdev", email: "poojasahdevram@gmail.com" });
//     }, 2000);
//   } else {
//     rej(`Error aa gyi babu sorry Somthing went wrong`);
//   }
// })
//   .then((obj1) => {
//     console.log(obj1);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// // chaining callback hells

// new Promise((res, rej) => {
//   let error = false;
//   if (!error) {
//     setTimeout(() => {
//       res({ name: "Pooja Sahdev", email: "poojasahdevram@gmail.com" });
//     }, 8000);
//   } else {
//     rej(`Error aa gyi babu sorry Somthing went wrong`);
//   }
// })
//   .then((obj1) => {
//     console.log(obj1);
//     return obj1.name;
//   })
//   .then((name) => {
//     console.log(`name is ${name}`);
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .finally(() => {
//     console.log(
//       "++++++++++++++++++++++++++++++End++++++++++++++++++++++++++++++++++++"
//     );
//   });

//Async awit syntax
let promise5 = new Promise((res, rej) => {
  let error = true;
  if (!error) {
    setTimeout(() => {
      res({ Language: "JS", file: "new@gmail.com" });
    }, 3000);
  } else {
    rej(`ErrorJS Error went wrong`);
  }
});

async function consumepromise5() {
  try {
    let responseofpromise = await promise5;
    console.log(responseofpromise);
  } catch (e) {
    console.log(e);
  }
}
consumepromise5();
