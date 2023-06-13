let FRENCH_URL = `http://localhost:8080/french`;
let frenchData = document.querySelector("#frenchData");

async function getFrenchhData() {
    frenchData.innerHTML += "";
  let res = await axios(FRENCH_URL);
  let data = await res.data;
  data.forEach((info) => {
    frenchData.innerHTML += `
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
  await axios.delete(`${FRENCH_URL}/${id}`);
  btn.closest("tr").remove();
}
