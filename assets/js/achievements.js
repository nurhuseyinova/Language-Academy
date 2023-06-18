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
let achieveEditStatus = false;
let achieveEditId = null;
let achieveCopyArr = [];

async function getAchievementsData() {
  achievementsData.innerHTML = "";
  let res = await axios(ACHIEVEMENTS_URL);
  let data = await res.data;
  achieveCopyArr = data;
  achieveCopyArr.forEach((student) => {
    achievementsData.innerHTML += `
                <tr>
                  <td><img src="${student.photo}" alt="" /></td>
                  <td>${student.firstName} ${student.lastName}</td>
                  <td>${student.subject} student</td>
                  <td>${student.result}</td>
                 <td>
                    <button class="delete" onclick=deleteBtn("${student.id}") >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="edit" onclick=editBtn("${student.id}")>
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr> 
        `;
  });
}
getAchievementsData();
