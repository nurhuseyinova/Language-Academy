////Courses page achievment section data;
let ACHIEVEMENTS_URL = `http://localhost:8000/achievements`;
let achieveCardData = document.querySelector(".achieveCardData");

async function getAchieveData() {
  achieveCardData.innerHTML = "";
  let res = await axios(ACHIEVEMENTS_URL);
  let data = await res.data;
  data.forEach((graduate) => {
    achieveCardData.innerHTML += `
      <div class="col col-12 col-md-6 col-lg-4">
      <div class="achievmentCard"> 
          <img src="${graduate.photo}" alt="">
          <h5 class="logo">LA</h5>
          <div class="cardNote">
              <h5 class="note">Result:${graduate.result}</h5>
              <h6 class="note d-flex">Language: ${graduate.subject}</h5>
              <h5 class="note note1">${graduate.firstName} ${graduate.lastName}</h6>

          </div> 
      </div>
  </div>  
                 
          `;
  });
}
getAchieveData();


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



