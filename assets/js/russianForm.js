let RUSSIAN_URL = `http://localhost:8080/russian`;
let russianForm = document.querySelector("#russianForm");
let russianFirstName = document.querySelector("#russianFirstName");
let russianLastName = document.querySelector("#russianLastName");
let russianEmail = document.querySelector("#russianEmail");
let russianSubject = document.querySelector("#russianSubject");
let russianPhoneNumber = document.querySelector("#russianPhoneNumber");
let russianSubmit = document.querySelector("#russianSubmit");
let russianDate = new Date();

russianForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    let obj = {
      firstName: russianFirstName.value,
      lastName: russianLastName.value,
      email: russianEmail.value,
      subject: russianSubject.value || "Russian",
      phone: `${russianPhoneNumber.value}`,
      date: russianDate.toLocaleString(),
    };
    if (
      russianFirstName.value &&
      russianLastName.value &&
      russianEmail.value &&
      russianSubject &&
      russianPhoneNumber.value
    ) {
        await axios.post(`${RUSSIAN_URL}`, obj);
      alert("Thank you for your registration, we will contact you soon");
    } else {
      alert("The form is not completed!");
    }
  });
  
  