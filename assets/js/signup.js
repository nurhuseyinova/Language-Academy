let signUpForm = document.querySelector("#signUpForm");
let signUsername = document.querySelector("#signUsername");
let signEmail = document.querySelector("#signEmail");
let signPassword = document.querySelector("#signPassword");
let signUp = document.querySelector("#signUp");
let date = new Date();
let users = JSON.parse(localStorage.getItem("users")) || [];

let disabled = true;
signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let user = {
    id: Date.now(),
    username: signUsername.value,
    email: signEmail.value,
    password: signPassword.value,
    date: date.toLocaleString(),
    isAdmin:false
  };
    if (user.username && user.email && user.password) {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      (signUsername.value = ""),
        (signEmail.value = ""),
        (signPassword.value = "");
     window.location="./login.html"
    } else {
      alert("Fill out the form!");
    }
});

function disabledEl() {
  if (signUsername.value && signEmail.value && signPassword.value) {
    signUp.disabled = false;
  } else {
    signUp.disabled = true;
  }
}
signUsername.addEventListener("input", disabledEl);
signEmail.addEventListener("input", disabledEl);
signPassword.addEventListener("input", disabledEl);
