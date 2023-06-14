let RUSSIAN_URL = `http://localhost:8080/russian`;
let russianData = document.querySelector("#russianData");
let russianForm = document.querySelector("#russianForm");
let russianFirstName = document.querySelector("#russianFirstName");
let russianLastName = document.querySelector("#russianLastName");
let russianEmail = document.querySelector("#russianEmail");
let russianSubject = document.querySelector("#russianSubject");
let russianPhoneStart = document.querySelector("#russianPhoneStart");
let russianPhoneEnd = document.querySelector("#russianPhoneEnd");
let russianSubmit = document.querySelector("#russianSubmit");
let russianFormHead = document.querySelector("#russianFormHead");
let editStatus3 = false;
let editId3 = null;
let copyArr3 = [];
async function getRussianData() {
  russianData.innerHTML = "";
  let res = await axios(RUSSIAN_URL);
  let data = await res.data;
  copyArr3 = data;
  copyArr3.forEach((info) => {
    russianData.innerHTML += `
                <tr>
                  <td>${info.id}</td>
                  <td>${info.firstName} ${info.lastName}</td>
                  <td>${info.email}</td>
                  <td>${info.phone}</td>
                  <td>${info.subject} language</td>
                  <td>
                    <button class="delete" onclick=deleteBtnRussian("${info.id}") >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="edit" onclick=editBtnRussian("${info.id}")>
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr> 
        `;
  });
}
getRussianData();

async function deleteBtnRussian(id, btn) {
  await axios.delete(`${RUSSIAN_URL}/${id}`);
  btn.closest("tr").remove();
}

russianForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    firstName: russianFirstName.value,
    lastName: russianLastName.value,
    email: russianEmail.value,
    subject: russianSubject.value || "Russian",
    phone: ` ${russianPhoneStart.value} ${russianPhoneEnd.value}`,
  };
  if (
    russianFirstName.value &&
    russianLastName.value &&
    russianEmail.value &&
    russianSubject &&
    russianPhoneEnd.value
  ) {
    if (editStatus3) {
      await axios.patch(`${RUSSIAN_URL}/${editId3}`, obj);
      getRussianData();
      russianSubmit.innerHTML = "Submit";
      russianFormHead.innerHTML = "Add Students";
      russianFirstName.innerHTML = "";
      russianLastName.innerHTML = "";
      russianEmail.innerHTML = "";
      russianSubject.innerHTML = "";
      editStatus3 = false;
    } else {
      await axios.post(`${RUSSIAN_URL}`, obj);
      getRussianData();
      console.log(obj);
    }
  } else {
    alert("The form is not completed!");
  }
});

async function editBtnRussian(id) {
  editId3 = id;
  editStatus3 = true;
  copyArr3.find((el) => el.id == editId3);
  let res = await axios(`${RUSSIAN_URL}/${id}`);
  let data = await res.data;
  russianFirstName.value = data.firstName;
  russianLastName.value = data.lastName;
  russianEmail.value = data.email;
  russianSubject.value = data.subject;
  //////
  russianPhoneEnd.value = data.phone;
  console.log(editId3);
  russianSubmit.innerHTML = "Edit";
  russianFormHead.innerHTML = "Edit Students";
}
