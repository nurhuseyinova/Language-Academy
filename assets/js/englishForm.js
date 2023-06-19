let ENGLISH_URL = `http://localhost:8080/english`;
let englishForm = document.querySelector("#englishForm");
let englishFirstName = document.querySelector("#englishFirstName");
let englishLastName = document.querySelector("#englishLastName");
let englishEmail = document.querySelector("#englishEmail");
let englishSubject = document.querySelector("#englishSubject");
let phoneNumber = document.querySelector("#phoneNumber");
let englishSubmit = document.querySelector("#englishSubmit");
let englishFormHead = document.querySelector("#englishFormHead");
let englishDate = new Date();

englishForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    firstName: englishFirstName.value,
    lastName: englishLastName.value,
    email: englishEmail.value,
    subject: englishSubject.value || "English",
    phone: `${phoneNumber.value}`,
    date: englishDate.toLocaleString(),
  };
  if (
    englishFirstName.value &&
    englishLastName.value &&
    englishEmail.value &&
    englishSubject &&
    phoneNumber.value
  ) {
    await axios.post(`${ENGLISH_URL}`, obj);
    alert("Thank you for your registration, we will contact you soon");
  } else {
    alert("The form is not completed!");
  }
});
