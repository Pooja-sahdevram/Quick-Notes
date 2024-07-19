// function add(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// }
// let a = add(5)(1)(5);

//practicle use cases ==>email

function SendEmail(To) {
  return function (subject) {
    return function (body) {
      return console.log(
        `Email is Sending to ${To} for ${subject} ===>${body} `
      );
    };
  };
}

SendEmail("ram")("job")("yes");
