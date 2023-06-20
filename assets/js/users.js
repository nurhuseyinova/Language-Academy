 let users = JSON.parse(localStorage.getItem("users")) || [];
 let usersTable = document.querySelector("#usersData");
 let adminForm = document.querySelector("#adminForm");
 let adminValue = document.querySelector("#adminValue");
 let adminSubmit = document.querySelector("#adminSubmit");
let adminEditId=null
function allUsers() {
  usersTable.innerHTML = "";
  users.forEach((item) => {
    usersTable.innerHTML += `
    <tr>
    <td>${item.username}</td>
    <td>${item.email}</td>
    <td>${item.password}</td>
    <td>${item.isAdmin}</td>
    <td>${item.date}</td>
    <td>
      <button class="delete" onclick=deleteUser("${item.id}")>
        <i class="fa-solid fa-trash"></i>
      </button>
      <button class="edit" onclick=adminBtn("${item.id}")>
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
    </td>
  </tr>
    `
  });
}
allUsers();
function deleteUser(id) {
  users = users.filter((user) => user.id != id);
  localStorage.setItem("users", JSON.stringify(users));
  allUsers();
  alert("This user has been logged out");
}