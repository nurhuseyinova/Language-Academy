////Team page experience section data;
let EXPERIENCE_URL = `http://localhost:8000/teachers`;
let experienceCard = document.querySelector(".experienceCard");

async function getExperienceData() {
    experienceCard.innerHTML = "";
  let res = await axios(EXPERIENCE_URL);
  let data = await res.data;
  console.log(data);
  data.forEach((teacher) => {
    experienceCard.innerHTML += `
    <div class="swiper-slide">
    <div class="slideImg">
      <img src="${teacher.photo}" alt="" />
      <ul>
        <li>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa-brands fa-linkedin"></i></a>
        </li>
      </ul>
    </div>
    <div class="slideNote">
      <h4>${teacher.firstName} ${teacher.lastName}</h4>
      <p>${teacher.subject} Teacher</p>
      <h5 class="year">Experience: <span>${teacher.experience}</span> yrs</h5>
    </div>
  </div>
                 
          `;
  });
}
getExperienceData();