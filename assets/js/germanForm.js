let GERMAN_URL = `http://localhost:8080/german`;
let germanForm = document.querySelector("#germanForm");
let germanFirstName = document.querySelector("#germanFirstName");
let germanLastName = document.querySelector("#germanLastName");
let germanEmail = document.querySelector("#germanEmail");
let germanSubject = document.querySelector("#germanSubject");
let germanPhoneNumber = document.querySelector("#germanPhoneNumber");
let germanSubmit = document.querySelector("#germanSubmit");
let germanDate = new Date();

germanForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    firstName: germanFirstName.value,
    lastName: germanLastName.value,
    email: germanEmail.value,
    subject: germanSubject.value || "German",
    phone: `${germanPhoneNumber.value}`,
    date: germanDate.toLocaleString(),
  };
  if (
    germanFirstName.value &&
    germanLastName.value &&
    germanEmail.value &&
    germanSubject &&
    germanPhoneNumber.value
  ) {
    await axios.post(`${GERMAN_URL}`, obj);
    alert("Thank you for your registration, we will contact you soon");
  } else {
    alert("The form is not completed!");
  }
});
