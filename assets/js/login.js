let loginForm = document.querySelector("#loginForm");
let loginUsername = document.querySelector("#loginUsername");
let loginPassword = document.querySelector("#loginPassword");
let loginUpBtn = document.querySelector("#loginUp");
// let faUser = document.querySelector(".fa-user");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault()
  let allUsersData = JSON.parse(localStorage.getItem("users"));
  let adminObj=allUsersData.find((user)=>
  user.username === loginUsername.value &&
    user.password === loginPassword.value&&
    user.isAdmin===true
)
  let userObj = allUsersData.find(
      (user) =>
      user.username === loginUsername.value &&
      user.password === loginPassword.value,
  );
  if ( adminObj) {
    window.location="./adminHTML/admin.html"
  }else if(userObj){
    localStorage.setItem("userName", userObj.username);
    window.location = "./index.html";
  }
   else {
    alert("Username or password wrong!")
  }
});
