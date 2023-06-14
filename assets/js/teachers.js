let TEACHERS_URL = `http://localhost:8000/teachers`;
let teachersData = document.querySelector("#teachersData");
let teachersForm = document.querySelector("#teachersForm");
let teachersFirstName = document.querySelector("#teachersFirstName");
let teachersLastName = document.querySelector("#teachersLastName");
let teachersEmail = document.querySelector("#teachersEmail");
let teachersExperience = document.querySelector("#teachersExperience");
let teachersPhoto = document.querySelector("#teachersPhoto");
let teachersSubject = document.querySelector("#teachersSubject");
let teachersInformation = document.querySelector("#teachersInformation");
let teachersSubmit = document.querySelector("#teachersSubmit");
let formHead = document.querySelector("#formHead");
let editStatus = false;
let editId = null;
let copyArr = [];

async function getTeachersData() {
  teachersData.innerHTML = "";
  let res = await axios(TEACHERS_URL);
  let data = await res.data;
  copyArr = data;
  copyArr.forEach((teacher) => {
    teachersData.innerHTML += `
                <tr>
                  <td>${teacher.id}</td>
                  <td><img src="${teacher.photo}" alt="" /></td>
                  <td>${teacher.firstName} ${teacher.lastName}</td>
                  <td>${teacher.email}</td>
                  <td>${teacher.subject} teacher</td>
                  <td>
                  ${teacher.information}
                  </td>
                  <td>${teacher.experience}</td>
                  <td>
                    <button class="delete" onclick=deleteBtn("${teacher.id}") >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="edit" onclick=editBtn("${teacher.id}")>
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr> 
        `;
  });
}
getTeachersData();

async function deleteBtn(id, btn) {
  await axios.delete(`${TEACHERS_URL}/${id}`);
  btn.closest("tr").remove();
}

teachersForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    photo: `../image/${teachersPhoto.value.split("\\")[2]} `,
    firstName: teachersFirstName.value,
    lastName: teachersLastName.value,
    email: teachersEmail.value,
    subject: teachersSubject.value || "English",
    information: teachersInformation.value,
    experience: teachersExperience.value,
  };
  if (
    teachersFirstName.value &&
    teachersLastName.value &&
    teachersEmail.value &&
    teachersSubject.value &&
    teachersInformation.value &&
    teachersExperience.value
  ) {
    if (editStatus) {
      await axios.patch(`${TEACHERS_URL}/${editId}`, obj);
      getTeachersData();
      teachersSubmit.innerHTML = "Submit";
      formHead.innerHTML = "Add Teachers";
      teachersFirstName.innerHTML = "";
      teachersLastName.innerHTML = "";
      teachersEmail.innerHTML = "";
      teachersSubject.innerHTML = "";
      teachersInformation.innerHTML = "";
      teachersExperience.innerHTML = "";
      editStatus = false;
    } else {
      await axios.post(`${TEACHERS_URL}`, obj);
      getTeachersData();
      console.log(obj);
    }
  }else{
    alert("The form is not completed!")
  }
});

async function editBtn(id) {
  editId = id;
  editStatus = true;
  copyArr.find((el) => el.id == editId);
  let res = await axios(`${TEACHERS_URL}/${id}`);
  let data = await res.data;
  teachersFirstName.value = data.firstName;
  teachersLastName.value = data.lastName;
  teachersEmail.value = data.email;
  teachersSubject.value = data.subject;
  teachersInformation.value = data.information;
  teachersExperience.value = data.experience;
  console.log(editId);

  teachersSubmit.innerHTML = "Edit";
  formHead.innerHTML = "Edit Teachers";
}
