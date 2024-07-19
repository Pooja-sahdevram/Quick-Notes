let body = document.querySelector("li");
function appendchildfx(value, content) {
  let temp = document.createElement(value);
  temp.innerHTML = `<li>${content}</li>`;
  return temp;
}
let x1 = appendchildfx("p", "oklijhygftrdeswa");
body.appendChild(x1);
let x2 = document.createTextNode("i love meggie");
body.appendChild(x2);

let body1 = document.querySelector("li");
body1.setAttribute("class", "hiiii by");

let p1 = document.createElement("h1");
p1.textContent = "Heading";
body1.replaceWith(p1);
