 let users = JSON.parse(localStorage.getItem("users")) || [];
 let usersTable = document.querySelector("#usersData");

function allUsers() {
  usersTable.innerHTML = "";
  users.forEach((item) => {
    console.log(item);
    usersTable.innerHTML += `
    <tr>
    <td>${item.username}</td>
    <td>${item.email}</td>
    <td>${item.password}</td>
    <td>${item.date}</td>
    <td>
      <button class="delete" onclick=deleteUser("${item.id}")>
        <i class="fa-solid fa-trash"></i>
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
  alert("Delete this user?");
}