////Courses page achievment section data;
let ACHIEVEMENTS_URL = `http://localhost:8000/achievements`;
let achieveCardData = document.querySelector(".achieveCardData");
let showMore = document.querySelector("#showMore");
let count=6
let achieveCopyData=[]
async function getAchieveData() {
  achieveCardData.innerHTML = "";
  let res = await axios(ACHIEVEMENTS_URL);
  let data = await res.data;
  achieveCopyData=data
  achieveCopyData.slice(0,count).forEach((graduate) => {
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

showMore.addEventListener("click", function () {
  count += 1;
  if (count > achieveCopyData.length) {
    showMore.style.display = "none";
  } else if (achieveCopyData.length) {
    getAchieveData(achieveCopyData.slice(0, count));
  } else {
    getAchieveData(achieveCopyData);
  }
});




