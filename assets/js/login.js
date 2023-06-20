let loginForm = document.querySelector("#loginForm");
let loginUsername = document.querySelector("#loginUsername");
let loginPassword = document.querySelector("#loginPassword");
let loginUpBtn = document.querySelector("#loginUp");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault()
  let allUsersData = JSON.parse(localStorage.getItem("users"));
  let userObj = allUsersData.find(
      (user) =>
      user.username === loginUsername.value &&
      user.password === loginPassword.value,
  );
  if (userObj) {
    localStorage.setItem("userName", userObj.username);
    console.log(userObj);
    window.location = "./index.html";
  } else {
    alert("Username or password wrong!")
  }
});
