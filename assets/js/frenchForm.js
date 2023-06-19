let FRENCH_URL = `http://localhost:8080/french`;
let frenchForm = document.querySelector("#frenchForm");
let frenchFirstName = document.querySelector("#frenchFirstName");
let frenchLastName = document.querySelector("#frenchLastName");
let frenchEmail = document.querySelector("#frenchEmail");
let frenchSubject = document.querySelector("#frenchSubject");
let frenchPhoneNumber = document.querySelector("#frenchPhoneNumber");
let frenchSubmit = document.querySelector("#frenchSubmit");
let frenchDate = new Date();

frenchForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    firstName: frenchFirstName.value,
    lastName: frenchLastName.value,
    email: frenchEmail.value,
    subject: frenchSubject.value || "French",
    phone: `${frenchPhoneNumber.value}`,
    date: frenchDate.toLocaleString(),
  };
  if (
    frenchFirstName.value &&
    frenchLastName.value &&
    frenchEmail.value &&
    frenchSubject &&
    frenchPhoneNumber.value
  ) {
    await axios.post(`${FRENCH_URL}`, obj);
    alert("Thank you for your registration, we will contact you soon");
  } else {
    alert("The form is not completed!");
  }
});
