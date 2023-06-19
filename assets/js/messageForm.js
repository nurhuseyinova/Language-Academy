let MESSAGE_URL = `http://localhost:3000/message`;
let messageForm = document.querySelector("#messageForm");
let messageFirstName = document.querySelector("#messageFirstName ");
let messageLastName = document.querySelector("#messageLastName ");
let messageEmail = document.querySelector("#messageEmail ");
let messageSubject = document.querySelector("#messageSubject");
let messageQusetion = document.querySelector("#messageQusetion");

messageForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    let obj = {
      firstName: messageFirstName.value,
      lastName: messageLastName.value,
      email: messageEmail.value,
      subject: messageSubject.value,
      question: messageQusetion.value,
    };
    if (
      messageFirstName.value &&
      messageLastName.value &&
      messageEmail.value &&
      messageSubject &&
      messageQusetion.value
    ) {
      await axios.post(`${MESSAGE_URL}`, obj);
      alert("Your question will be answered soon.Thanks You");
    } else {
      alert("The form is not completed!");
    }
  });