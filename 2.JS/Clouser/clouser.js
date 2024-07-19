//when a function write in a function called clousers
// when this type of function return a inner function then  whole lexical scope is transfer

function outerFXN() {
  let username = "pooja";

  function showname() {
    console.log(username);
  }
  return showname(); //whole lexical scope is password
}

outerFXN();
