let ACHIEVEMENTS_URL = `http://localhost:8000/achievements`;
let achievementsData = document.querySelector("#achievementsData");
let achievementsForm = document.querySelector("#achievementsForm");
let achievementsFirstName = document.querySelector("#achievementsFirstName");
let achievementsLastName = document.querySelector("#achievementsLastName");
let achievementsResult = document.querySelector("#achievementsResult");
let achievementsPhoto = document.querySelector("#achievementsPhoto");
let achievementsSubject = document.querySelector("#achievementsSubject");
let achievementsSubmit = document.querySelector("#achievementsSubmit");
let achievmentsFormHead = document.querySelector("#achievmentsFormHead");
let sortBtn = document.querySelector("#sortBtn");
let achieveEditStatus = false;
let achieveEditId = null;
let achieveCopyArr = [];
let sorted=[]
let defaultArr=[]

async function getAchievementsData() {
  achievementsData.innerHTML = "";
  let res = await axios(ACHIEVEMENTS_URL);
  let data = await res.data;
  defaultArr=data
  sorted=data
  achieveCopyArr = achieveCopyArr.length ? achieveCopyArr : data;
  achieveCopyArr.forEach((student) => {
    achievementsData.innerHTML += `
                <tr>
                  <td><img src="${student.photo}" alt="" /></td>
                  <td>${student.firstName} ${student.lastName}</td>
                  <td>${student.subject} language</td>
                  <td>${student.result}</td>
                 <td>
                    <button class="delete" onclick=deleteAchieveBtn("${student.id}") >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="edit" onclick=editAchieveBtn("${student.id}")>
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr> 
        `;
  });
}
getAchievementsData();

let asc=true
sortBtn.addEventListener("click",function(e){
    asc=!asc
    if(!asc){
        sorted=achieveCopyArr.sort((a,b)=>a.result-b.result)
    sortBtn.innerHTML="Ascending"
    }
    else{
        sorted=achieveCopyArr.sort((a,b)=>b.result-a.result)
        sortBtn.innerHTML="Descending"
    }
    getAchievementsData(achieveCopyArr)
})

async function deleteAchieveBtn(id, btn) {
  await axios.delete(`${ACHIEVEMENTS_URL}/${id}`);
  btn.closest("tr").remove();
}

achievementsForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    photo: `../assets/image/${achievementsPhoto.value.split("\\")[2]} `,
    firstName: achievementsFirstName.value,
    lastName: achievementsLastName.value,
    result: achievementsResult.value,
    subject: achievementsSubject.value,
  };
  if (
    achievementsFirstName.value &&
    achievementsLastName.value &&
    achievementsResult.value &&
    achievementsSubject.value &&
    achievementsPhoto.value
  )
    if (achieveEditStatus) {
      await axios.patch(`${ACHIEVEMENTS_URL}/${achieveEditId}`, obj);
      getAchievementsData();
      achievementsSubmit.innerHTML = "Submit";
      achievmentsFormHead.innerHTML = "Add Achievements";
      achievementsFirstName.innerHTML = "";
      achievementsLastName.innerHTML = "";
      achievementsResult.innerHTML = "";
      achievementsSubject.innerHTML = "";
      achieveEditStatus = false;
    } else {
      await axios.post(`${ACHIEVEMENTS_URL}`, obj);
      getAchievementsData();
    }
  else {
    alert("The form is not completed!");
  }
});

async function editAchieveBtn(id) {
  achieveEditId = id;
  achieveEditStatus = true;
  achieveCopyArr.find((el) => el.id == achieveEditId);
  let res = await axios(`${ACHIEVEMENTS_URL}/${id}`);
  let data = await res.data;
  achievementsFirstName.value = data.firstName;
  achievementsLastName.value = data.lastName;
  achievementsResult.value = data.result;
  achievementsSubject.value = data.subject;
  console.log(achieveEditId);
  achievementsSubmit.innerHTML = "Edit";
  achievmentsFormHead.innerHTML = "Edit Achievements";
}

