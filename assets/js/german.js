let GERMAN_URL = `http://localhost:8080/german`;
let germanData = document.querySelector("#germanData");

async function getFrenchhData() {
  germanData.innerHTML += "";
  let res = await axios(GERMAN_URL);
  let data = await res.data;
  data.forEach((info) => {
    germanData.innerHTML += `
                <tr>
                  <td>${info.id}</td>
                  <td>${info.firstName} ${info.lastName}</td>
                  <td>${info.email}</td>
                  <td>${info.phone}</td>
                  <td>${info.subject} language</td>
                  <td>
                    <button class="delete" onclick=deleteBtn("${info.id}") >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="edit" onclick=editBtn("${info.id}")>
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr> 
        `;
  });
}
getFrenchhData();

async function deleteBtn(id, btn) {
  await axios.delete(`${GERMAN_URL}/${id}`);
  btn.closest("tr").remove();
}
