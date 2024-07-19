let card = document.querySelector(".container");
let img = document.querySelector("img");
let followersd = document.querySelector("h5");
let like = document.querySelector("h2");
let p = document.querySelector("p");
let button = document.querySelector("button");
let xml = new XMLHttpRequest();
let requrl = "https://api.github.com/users/Pooja-sahdevram";
xml.open("Get", requrl);
xml.onreadystatechange = function () {
  console.log(xml.readyState);
  if (xml.readyState == 4) {
    let data = JSON.parse(this.responseText);
    let bio = data.bio;
    let urlimg = data.avatar_url;
    let followers = data.followers;
    img.src = urlimg;
    img.style.width = card.offsetWidth - 8 + "px";
    img.style.padding = "2px";

    followersd.innerText = `Followers: ${followers} 😊`;
    p.innerText = bio;
  }
};
xml.send();
button.addEventListener("click", () => {
  const content = document.querySelector("body").innerText;
  const textarea = document.createElement("textarea");
  textarea.value = content;
  document.body.appendChild(textarea);
  document.execCommand("copy");

  // Clean up - remove the textarea
  document.body.removeChild(textarea);

  // Optionally, provide feedback to the user
  alert("Content copied to clipboard");

  // Select the textarea content
  textarea.select();
});
