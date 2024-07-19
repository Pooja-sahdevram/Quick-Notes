// js is synchrounous, single threaded

//excution context=> code run one after onother .

//blocking code vs non blocking code
//blocking code :- block the flow of the program , Read a file asynchrounsly
//Non blocking code :- Does not block the excution , read file async
console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);
