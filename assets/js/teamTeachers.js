////Team page teachers section data;
let TEACHERS_URL = `http://localhost:8000/teachers`;
let teacherCard = document.querySelector(".teacherCard");

async function getTeacherData() {
  teacherCard.innerHTML = "";
  let res = await axios(TEACHERS_URL);
  let data = await res.data;
  data.forEach((teacher) => {
    teacherCard.innerHTML += `
    <div class="col col-12 col-sm-6 col-lg-4 my-5">
    <div class="item">
      <div class="itemImg">
        <img src="${teacher.photo}" alt="" />
      </div>
      <div class="itemNote">
        <h3>${teacher.firstName} ${teacher.lastName}</h3>
        <h5>${teacher.subject} teacher</h5>
        <p>
        ${teacher.information.slice(0,50)}...
        </p>
        <a href="./detail.html?id=${teacher.id}">Read More</a>
      </div>
    </div>
  </div> 
                 
          `;
  });
}
getTeacherData();