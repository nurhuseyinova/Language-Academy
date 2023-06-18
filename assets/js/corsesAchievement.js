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
              <h5 class="note note1">${graduate.lastName} ${graduate.lastName}</h6>

          </div> 
      </div>
  </div>  
                 
          `;
  });
}
getAchieveData();
