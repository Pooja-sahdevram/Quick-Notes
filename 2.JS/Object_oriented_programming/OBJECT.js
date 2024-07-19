const user = {
  username: "pooja",
  loginCount: 5,
  signIn: true,

  getUserDetails() {
    console.log(this);
  },
};
user.getUserDetails();
console.log(this);
