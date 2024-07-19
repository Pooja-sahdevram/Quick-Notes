// async function promisehandler() {
//   try {
//     let response = await fetch("https://api.github.com/users/Pooja-sahdevram");
//     let data = await response.json();
//     console.log(data.login);
//     console.log;
//   } catch (e) {
//     console.log(e);
//   }
// }
// promisehandler();
let url = "https://api.github.com/users/Pooja-sahdevram";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((E) => {
    console.log("Error", E);
  });
