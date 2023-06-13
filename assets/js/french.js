let FRENCH_URL = `http://localhost:8080/french`;
let frenchData = document.querySelector("#frenchData");

async function getFrenchData() {
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
                    <button class="delete" onclick=deleteBtnFrench("${info.id}") >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="edit" onclick=editBtnFrench("${info.id}")>
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr> 
        `;
  });
}
getFrenchData();

async function deleteBtnFrench(id, btn) {
  await axios.delete(`${FRENCH_URL}/${id}`);
  btn.closest("tr").remove();
}
