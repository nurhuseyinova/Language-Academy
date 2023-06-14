let ENGLISH_URL = `http://localhost:8080/english`;
let englishData = document.querySelector("#englishData");
let englishForm = document.querySelector("#englishForm");
let englishFirstName = document.querySelector("#englishFirstName");
let englishLastName = document.querySelector("#englishLastName");
let englishEmail = document.querySelector("#englishEmail");
let englishSubject = document.querySelector("#englishSubject");
let studentsPhoneStart = document.querySelector("#studentsPhoneStart");
let studentsPhoneEnd = document.querySelector("#studentsPhoneEnd");
let englishSubmit = document.querySelector("#englishSubmit");
let englishFormHead = document.querySelector("#englishFormHead");
let editStatus2 = false;
let editId2 = null;
let copyArr2 = [];

async function getEnglishData() {
  englishData.innerHTML = "";
  let res = await axios(ENGLISH_URL);
  let data = await res.data;
  copyArr2 = data;
  copyArr2.forEach((info) => {
    englishData.innerHTML += `
                <tr>
                  <td>${info.id}</td>
                  <td>${info.firstName} ${info.lastName}</td>
                  <td>${info.email}</td>
                  <td>${info.phone}</td>
                  <td>${info.subject} language</td>
                  <td>
                    <button class="delete" onclick=deleteBtnEnglish("${info.id}") >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="edit" onclick=editBtnEnglish("${info.id}")>
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr> 
        `;
  });
}
getEnglishData();

async function deleteBtnEnglish(id, btn) {
  await axios.delete(`${ENGLISH_URL}/${id}`);
  btn.closest("tr").remove();
}

englishForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    firstName: englishFirstName.value,
    lastName: englishLastName.value,
    email: englishEmail.value,
    subject: englishSubject.value || "English",
    phone: ` ${studentsPhoneStart.value} ${studentsPhoneEnd.value}`,
  };
  if (
    englishFirstName.value &&
    englishLastName.value &&
    englishEmail.value &&
    studentsPhoneStart.value &&
    studentsPhoneEnd.value
  ) {
    if (editStatus2) {
      await axios.patch(`${ENGLISH_URL}/${editId2}`, obj);
      getEnglishData();
      englishSubmit.innerHTML = "Submit";
      englishFormHead.innerHTML = "Add Students";
      englishFirstName.innerHTML = "";
      englishLastName.innerHTML = "";
      englishEmail.innerHTML = "";
      englishSubject.innerHTML = "";
      editStatus2 = false;
    } else {
      await axios.post(`${ENGLISH_URL}`, obj);
      getEnglishData();
      console.log(obj);
    }
  } else {
    alert("The form is not completed!");
  }
});

async function editBtnEnglish(id) {
  editId2 = id;
  editStatus2 = true;
  copyArr2.find((el) => el.id == editId2);
  let res = await axios(`${ENGLISH_URL}/${id}`);
  let data = await res.data;
  englishFirstName.value = data.firstName;
  englishLastName.value = data.lastName;
  englishEmail.value = data.email;
  englishSubject.value = data.subject;
  studentsPhoneStart.value = data.phone;
  studentsPhoneEnd.value = data.phone;
  console.log(editId2);
  englishSubmit.innerHTML = "Edit";
  englishFormHead.innerHTML = "Edit Students";
}
