let ENGLISH_URL = `http://localhost:8080/english`;
let englishData = document.querySelector("#englishData");

async function getEnglishData() {
  englishData.innerHTML += "";
  let res = await axios(ENGLISH_URL);
  let data = await res.data;
  data.forEach((info) => {
    englishData.innerHTML += `
                <tr>
                  <td>${info.id}</td>
                  <td>${info.firstName} ${info.lastName}</td>
                  <td>${info.email}</td>
                  <td>${info.phone}</td>
                  <td>${info.subject} teacher</td>
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
getEnglishData();

async function deleteBtn(id, btn) {
  await axios.delete(`${ENGLISH_URL}/${id}`);
  btn.closest("tr").remove();
}
