let usersInfo = document.querySelectorAll(".usersInfo");
let teacherInfo = document.querySelectorAll(".teacherInfo");
let commentInfo = document.querySelectorAll(".commentInfo");
let englishInfo = document.querySelectorAll(".englishInfo");
let russianInfo = document.querySelectorAll(".russianInfo");
let almanInfo = document.querySelectorAll(".almanInfo");
let frenchInfo = document.querySelectorAll(".frenchInfo");
let mainPage = document.querySelector(".mainPage");
let usersPage = document.querySelector("#users");
let teachersPage = document.querySelector("#teachers");
let commentPage = document.querySelector("#comment");
let englishPage = document.querySelector("#english");
let russianPage = document.querySelector("#russian");
let almanPage = document.querySelector("#alman");
let frenchPage = document.querySelector("#french");

usersInfo.forEach((el) =>
  el.addEventListener("click", function () {
    mainPage.style.display = "none";
    usersPage.style.display = "block";
    teachersPage.style.display = "none";
    commentPage.style.display = "none";
    englishPage.style.display = "none";
    russianPage.style.display = "none";
    almanPage.style.display = "none";
    frenchPage.style.display = "none";
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
    almanPage.style.display = "none";
    frenchPage.style.display = "none";
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
    almanPage.style.display = "none";
    frenchPage.style.display = "none";
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
    almanPage.style.display = "none";
    frenchPage.style.display = "none";
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
    almanPage.style.display = "none";
    frenchPage.style.display = "none";
  })
);
almanInfo.forEach((el) =>
  el.addEventListener("click", function () {
    mainPage.style.display = "none";
    usersPage.style.display = "none";
    teachersPage.style.display = "none";
    commentPage.style.display = "none";
    englishPage.style.display = "none";
    russianPage.style.display = "none";
    almanPage.style.display = "block";
    frenchPage.style.display = "none";
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
    almanPage.style.display = "none";
    frenchPage.style.display = "block";
  })
);
