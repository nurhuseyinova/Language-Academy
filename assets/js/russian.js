let RUSSIAN_URL = `http://localhost:8080/russian`;
let russianData = document.querySelector("#russianData");
let copyArr3 = [];
async function getRussianData() {
  russianData.innerHTML = "";
  let res = await axios(RUSSIAN_URL);
  let data = await res.data;
  copyArr3 = data;
  copyArr3.forEach((info) => {
    russianData.innerHTML += `
                <tr>
                  <td>${info.firstName} ${info.lastName}</td>
                  <td>${info.email}</td>
                  <td>${info.phone}</td>
                  <td>${info.subject} language</td>
                  <td>${info.date}</td>
                  <td>
                    <button class="delete" onclick=deleteBtnRussian("${info.id}") >
                      <i class="fa-solid fa-trash"></i>
                    </button>                    
                  </td>
                </tr> 
        `;
  });
}
getRussianData();

async function deleteBtnRussian(id, btn) {
  await axios.delete(`${RUSSIAN_URL}/${id}`);
  btn.closest("tr").remove();
}

