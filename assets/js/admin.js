let usersInfo = document.querySelectorAll(".usersInfo");
let teacherInfo = document.querySelectorAll(".teacherInfo");
let commentInfo = document.querySelectorAll(".commentInfo");
let englishInfo = document.querySelectorAll(".englishInfo");
let russianInfo = document.querySelectorAll(".russianInfo");
let germanInfo = document.querySelectorAll(".germanInfo");
let frenchInfo = document.querySelectorAll(".frenchInfo");
let messageInfo = document.querySelectorAll(".messageInfo");
let mainPage = document.querySelector(".mainPage");
let usersPage = document.querySelector("#users");
let teachersPage = document.querySelector("#teachers");
let commentPage = document.querySelector("#comment");
let englishPage = document.querySelector("#english");
let russianPage = document.querySelector("#russian");
let germanPage = document.querySelector("#german");
let frenchPage = document.querySelector("#french");
let messagePage = document.querySelector("#message");

usersInfo.forEach((el) =>
  el.addEventListener("click", function () {
    mainPage.style.display = "none";
    usersPage.style.display = "block";
    teachersPage.style.display = "none";
    commentPage.style.display = "none";
    englishPage.style.display = "none";
    russianPage.style.display = "none";
    germanPage.style.display = "none";
    frenchPage.style.display = "none";
    messagePage.style.display = "none";
  })
);
teacherInfo.forEach((el) =>
  el.addEventListener("click", function () {
    mainPage.style.display = "none";
    usersPage.style.display = "none";
    teachersPage.style.display = "block";
    commentPage.style.display = "none";
    englishPage.style.display = "none";
    russianPage.style.display = "none";
    germanPage.style.display = "none";
    frenchPage.style.display = "none";
    messagePage.style.display = "none";
  })
);
commentInfo.forEach((el) =>
  el.addEventListener("click", function () {
    mainPage.style.display = "none";
    usersPage.style.display = "none";
    teachersPage.style.display = "none";
    commentPage.style.display = "block";
    englishPage.style.display = "none";
    russianPage.style.display = "none";
    germanPage.style.display = "none";
    frenchPage.style.display = "none";
    messagePage.style.display = "none";
  })
);
englishInfo.forEach((el) =>
  el.addEventListener("click", function () {
    mainPage.style.display = "none";
    usersPage.style.display = "none";
    teachersPage.style.display = "none";
    commentPage.style.display = "none";
    englishPage.style.display = "block";
    russianPage.style.display = "none";
    germanPage.style.display = "none";
    frenchPage.style.display = "none";
    messagePage.style.display = "none";
  })
);
russianInfo.forEach((el) =>
  el.addEventListener("click", function () {
    mainPage.style.display = "none";
    usersPage.style.display = "none";
    teachersPage.style.display = "none";
    commentPage.style.display = "none";
    englishPage.style.display = "none";
    russianPage.style.display = "block";
    germanPage.style.display = "none";
    frenchPage.style.display = "none";
    messagePage.style.display = "none";
  })
);
germanInfo.forEach((el) =>
  el.addEventListener("click", function () {
    mainPage.style.display = "none";
    usersPage.style.display = "none";
    teachersPage.style.display = "none";
    commentPage.style.display = "none";
    englishPage.style.display = "none";
    russianPage.style.display = "none";
    germanPage.style.display = "block";
    frenchPage.style.display = "none";
    messagePage.style.display = "none";
  })
);
frenchInfo.forEach((el) =>
  el.addEventListener("click", function () {
    mainPage.style.display = "none";
    usersPage.style.display = "none";
    teachersPage.style.display = "none";
    commentPage.style.display = "none";
    englishPage.style.display = "none";
    russianPage.style.display = "none";
    germanPage.style.display = "none";
    frenchPage.style.display = "block";
    messagePage.style.display = "none";
  })
);
messageInfo.forEach((el) =>
  el.addEventListener("click", function () {
    mainPage.style.display = "none";
    usersPage.style.display = "none";
    teachersPage.style.display = "none";
    commentPage.style.display = "none";
    englishPage.style.display = "none";
    russianPage.style.display = "none";
    germanPage.style.display = "none";
    frenchPage.style.display = "none";
    messagePage.style.display = "block";
  })
);
