// BOM has window ,location object ,history m navigaation setc
//DOM document object model all about the document , html etc

//nodelist

let listelment = document.querySelectorAll(".list");
listelment.forEach((e) => {
  e.classList.add("add");
});
listelment[0].style.color = "green";

//HTMLELement list
let list2 = document.getElementsByClassName("LIST1");
let x = Array.from(list2);
console.log(x);
x.forEach((e) => (e.style.color = "red"));
x[0].innerText = " Ahmadk";
let p = document.createElement("p");
p.innerHTML = `<li class="add">Lorem500<li>`;
x[0].appendChild(p);
