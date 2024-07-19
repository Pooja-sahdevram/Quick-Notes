let btn = document.querySelector(".btn1");
let btn1 = document.querySelector(".btn2");

let body = document.querySelector("body");
let p;
function randomcolor() {
  let c1 = Math.floor(Math.random() * 255);
  let c2 = Math.floor(Math.random() * 255);
  let c3 = Math.floor(Math.random() * 255);
  return `rgb(${c1},${c2},${c3})`;
}
btn.addEventListener("click", () => {
  p = setInterval(() => {
    body.style.background = randomcolor();
  }, 500);
});
btn1.addEventListener("click", () => {
  clearInterval(p);
});
