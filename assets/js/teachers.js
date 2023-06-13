let TEACHERS_URL = `http://localhost:8000/teachers`;
let teachersData = document.querySelector("#teachersData");

async function getTeachersData() {
  teachersData.innerHTML += "";
  let res = await axios(TEACHERS_URL);
  let data = await res.data;
  data.forEach((teacher) => {
    teachersData.innerHTML += `
                <tr>
                  <td>${teacher.id}</td>
                  <td><img src="${teacher.photo}" alt="" /></td>
                  <td>${teacher.firstName} ${teacher.lastName}</td>
                  <td>${teacher.email}</td>
                  <td>${teacher.subject} teacher</td>
                  <td>
                  ${teacher.information}
                  </td>
                  <td>${teacher.experience}</td>
                  <td>
                    <button class="delete" onclick=deleteBtn("${teacher.id}") >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="edit" onclick=editBtn("${teacher.id}")>
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr> 
        `;
  });
}
getTeachersData();

async function deleteBtn(id, btn) {
  await axios.delete(`${TEACHERS_URL}/${id}`);
  btn.closest("tr").remove();
}
