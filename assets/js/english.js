let ENGLISH_URL = `http://localhost:8080/english`;
let englishData = document.querySelector("#englishData");
let copyArr2 = [];

async function getEnglishData() {
  englishData.innerHTML = "";
  let res = await axios(ENGLISH_URL);
  let data = await res.data;
  copyArr2 = data;
  copyArr2.forEach((info) => {
    englishData.innerHTML += `
                <tr>
                  <td>${info.firstName} ${info.lastName}</td>
                  <td>${info.email}</td>
                  <td>${info.phone}</td>
                  <td>${info.subject} language</td>
                  <td>${info.date}</td>
                  <td>
                    <button class="delete" onclick=deleteBtnEnglish("${info.id}") >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr> 
        `;
  });
}
getEnglishData();

async function deleteBtnEnglish(id, btn) {
  await axios.delete(`${ENGLISH_URL}/${id}`);
  btn.closest("tr").remove();
}


