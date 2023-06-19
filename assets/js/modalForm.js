///////English language regiter form modal///////
let englishModal = document.querySelector(".englishModal");
let englishModalBtn = document.querySelector("#englishModalBtn");
let englishClose = document.querySelector(".englishClose");
englishModalBtn.onclick = function() {
    englishModal.style.display = "block";
}
englishClose.onclick = function() {
    englishModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == englishModal) {
    englishModal.style.display = "none";
  }
}

///////Russian language regiter form modal///////
let russianModal = document.querySelector(".russianModal");
let russianModalBtn = document.querySelector("#russianModalBtn");
let russianClose = document.querySelector(".russianClose");
russianModalBtn.onclick = function() {
    russianModal.style.display = "block";
}
russianClose.onclick = function() {
    russianModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == russianModal) {
    russianModal.style.display = "none";
  }
}

///////German language regiter form modal///////
let germanModal = document.querySelector(".germanModal");
let germanModalBtn = document.querySelector("#germanModalBtn");
let germanClose = document.querySelector(".germanClose");
germanModalBtn.onclick = function() {
    germanModal.style.display = "block";
}
germanClose.onclick = function() {
    germanModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target ==germanModal) {
    germanModal.style.display = "none";
  }
}



///////French language regiter form modal///////
let frenchModal = document.querySelector(".frenchModal");
let frenchModalBtn = document.querySelector("#frenchModalBtn");
let frenchClose = document.querySelector(".frenchClose");
frenchModalBtn.onclick = function() {
    frenchModal.style.display = "block";
}
frenchClose.onclick = function() {
    frenchModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target ==frenchModal) {
    frenchModal.style.display = "none";
  }
}


/////////Comment form modal/////////
let commentModal = document.querySelector(".commentModal");
let commentModalBtn = document.querySelector("#commentModalBtn");
let commentClose = document.querySelector(".commentClose");
commentModalBtn.onclick = function() {
    commentModal.style.display = "block";
}
commentClose.onclick = function() {
    commentModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target ==commentModal) {
    commentModal.style.display = "none";
  }
}



