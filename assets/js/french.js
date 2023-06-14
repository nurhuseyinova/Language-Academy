let FRENCH_URL = `http://localhost:8080/french`;
let frenchData = document.querySelector("#frenchData");
let frenchForm = document.querySelector("#frenchForm");
let frenchFirstName = document.querySelector("#frenchFirstName");
let frenchLastName = document.querySelector("#frenchLastName");
let frenchEmail = document.querySelector("#frenchEmail");
let germanSubject = document.querySelector("#germanSubject");
let frenchPhoneStart = document.querySelector("#frenchPhoneStart");
let frenchPhoneEnd = document.querySelector("#frenchPhoneEnd");
let frenchSubmit = document.querySelector("#frenchSubmit");
let frenchFormHead = document.querySelector("#frenchFormHead");
let editStatus5 = false;
let editId5 = null;
let copyArr5 = [];

async function getFrenchData() {
  frenchData.innerHTML = "";
  let res = await axios(FRENCH_URL);
  let data = await res.data;
  copyArr5 = data;
  copyArr5.forEach((info) => {
    frenchData.innerHTML += `
                <tr>
                  <td>${info.id}</td>
                  <td>${info.firstName} ${info.lastName}</td>
                  <td>${info.email}</td>
                  <td>${info.phone}</td>
                  <td>${info.subject} language</td>
                  <td>
                    <button class="delete" onclick=deleteBtnFrench("${info.id}") >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="edit" onclick=editBtnFrench("${info.id}")>
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr> 
        `;
  });
}
getFrenchData();

async function deleteBtnFrench(id, btn) {
  await axios.delete(`${FRENCH_URL}/${id}`);
  btn.closest("tr").remove();
}

frenchForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    firstName: frenchFirstName.value,
    lastName: frenchLastName.value,
    email: frenchEmail.value,
    subject: germanSubject.value || "French",
    phone: ` ${frenchPhoneStart.value} ${frenchPhoneEnd.value}`,
  };
  if (
    frenchFirstName.value &&
    frenchLastName.value &&
    frenchEmail.value &&
    germanSubject &&
    frenchPhoneEnd.value
  ) {
    if (editStatus5) {
      await axios.patch(`${FRENCH_URL}/${editId5}`, obj);
      getFrenchData();
      frenchSubmit.innerHTML = "Submit";
      frenchFormHead.innerHTML = "Add Students";
      frenchFirstName.innerHTML = "";
      frenchLastName.innerHTML = "";
      frenchEmail.innerHTML = "";
      germanSubject.innerHTML = "";
      editStatus5 = false;
    } else {
      await axios.post(`${FRENCH_URL}`, obj);
      getFrenchData();
      console.log(obj);
    }
  } else {
    alert("The form is not completed!");
  }
});

async function editBtnFrench(id) {
  editId5 = id;
  editStatus5 = true;
  copyArr5.find((el) => el.id == editId5);
  let res = await axios(`${FRENCH_URL}/${id}`);
  let data = await res.data;
  frenchFirstName.value = data.firstName;
  frenchLastName.value = data.lastName;
  frenchEmail.value = data.email;
  germanSubject.value = data.subject;
  frenchPhoneEnd.value = data.phone;
  // console.log(editId5);
  frenchSubmit.innerHTML = "Edit";
  frenchFormHead.innerHTML = "Edit Students";
}
