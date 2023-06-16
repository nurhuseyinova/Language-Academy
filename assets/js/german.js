let GERMAN_URL = `http://localhost:8080/german`;
let germanData = document.querySelector("#germanData");
let germanForm = document.querySelector("#germanForm");
let germanFirstName = document.querySelector("#germanFirstName");
let germanLastName = document.querySelector("#germanLastName");
let germanEmail = document.querySelector("#germanEmail");
let germanSubject = document.querySelector("#germanSubject");
let germanPhoneStart = document.querySelector("#germanPhoneStart");
let germanPhoneEnd = document.querySelector("#germanPhoneEnd");
let germanSubmit = document.querySelector("#germanSubmit");
let germanFormHead = document.querySelector("#germanFormHead");
let editStatus4 = false;
let editId4 = null;
let copyArr4 = [];
async function getGermanData() {
  germanData.innerHTML = "";
  let res = await axios(GERMAN_URL);
  let data = await res.data;
  copyArr4=data
  copyArr4.forEach((info) => {
    germanData.innerHTML += `
                <tr>
                  <td>${info.firstName} ${info.lastName}</td>
                  <td>${info.email}</td>
                  <td>${info.phone}</td>
                  <td>${info.subject} language</td>
                  <td>
                    <button class="delete" onclick=deleteBtnGerman("${info.id}") >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="edit" onclick=editBtnGerman("${info.id}")>
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr> 
        `;
  });
}
getGermanData();

async function deleteBtnGerman(id, btn) {
  await axios.delete(`${GERMAN_URL}/${id}`);
  btn.closest("tr").remove();
}

germanForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    firstName: germanFirstName.value,
    lastName: germanLastName.value,
    email: germanEmail.value,
    subject: germanSubject.value || "German",
    phone: ` ${germanPhoneStart.value} ${germanPhoneEnd.value}`,
  };
  if (
    germanFirstName.value &&
    germanLastName.value &&
    germanEmail.value &&
    germanSubject &&
    germanPhoneEnd.value
  ) {
    if (editStatus4) {
      await axios.patch(`${GERMAN_URL}/${editId4}`, obj);
      getGermanData();
      germanSubmit.innerHTML = "Submit";
      germanFormHead.innerHTML = "Add Students";
      germanFirstName.innerHTML = "";
      germanLastName.innerHTML = "";
      germanEmail.innerHTML = "";
      germanSubject.innerHTML = "";
      editStatus4 = false;
    } else {
      await axios.post(`${GERMAN_URL}`, obj);
      getGermanData();
      console.log(obj);
    }
  } else {
    alert("The form is not completed!");
  }
});

async function editBtnGerman(id) {
  editId4 = id;
  editStatus4 = true;
  copyArr4.find((el) => el.id == editId4);
  let res = await axios(`${GERMAN_URL}/${id}`);
  let data = await res.data;
  germanFirstName.value = data.firstName;
  germanLastName.value = data.lastName;
  germanEmail.value = data.email;
  germanSubject.value = data.subject;
  germanPhoneEnd.value = data.phone;
  // console.log(editId4);
  germanSubmit.innerHTML = "Edit";
  germanFormHead.innerHTML = "Edit Students";
}
