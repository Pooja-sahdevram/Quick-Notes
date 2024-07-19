//call is a function that used to pass the current excution to another fxn having 2 parameters 1.this ,2.arguments

function SetUsername(username) {
  this.username = username;
  console.log("called");
}

function CreateUser(username, loginid, age) {
  SetUsername.call(this, username);

  (this.loginid = loginid), (this.age = age);
}

let user1 = new CreateUser("Vishnath", "vishu@12.ai", 25);

console.log(user1);
