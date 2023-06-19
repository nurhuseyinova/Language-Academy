let COMMENT_URL = `http://localhost:3000/comment`;
let commentForm = document.querySelector("#commentForm");
let commentFirstName = document.querySelector("#commentFirstName");
let commentLastName = document.querySelector("#commentLastName");
let commentText = document.querySelector("#commentText");
let commentSubject = document.querySelector("#commentSubject");
let commentPhoto = document.querySelector("#commentPhoto");
let commentSubmit = document.querySelector("#commentSubmit");
let commentDate = new Date();

commentForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    photo: `../assets/image/${commentPhoto.value.split("\\")[2]} `,
    firstName: commentFirstName.value,
    lastName: commentLastName.value,
    comment: commentText.value,
    subject: commentSubject.value || "English",
    date: commentDate.toLocaleDateString(),
  };
  if (
    commentFirstName.value &&
    commentLastName.value &&
    commentText.value &&
    commentSubject &&
    commentPhoto.value
  ) {
    await axios.post(`${COMMENT_URL}`, obj);
    alert("Thank you for your comment");
  } else {
    alert("The form is not completed!");
  }
});
