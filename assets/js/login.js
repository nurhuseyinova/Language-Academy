let loginForm = document.querySelector("#loginForm");
let loginUsername = document.querySelector("#loginUsername");
let loginPassword = document.querySelector("#loginPassword");
let loginUpBtn = document.querySelector("#loginUp");
loginForm.addEventListener("submit", function (e) {
  let allUsersData = JSON.parse(localStorage.getItem("users"));
  let userObj = allUsersData.find(
      (user) =>
      user.username == loginUsername.value &&
      user.password == loginPassword.value,
  );
  if (userObj) {
    console.log(userObj);
    window.location = "./index.html";
    alert("Welcome user")
  } else {
    alert("You are not a user!")
  }
});
