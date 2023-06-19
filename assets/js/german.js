let GERMAN_URL = `http://localhost:8080/german`;
let germanData = document.querySelector("#germanData");
let copyArr4 = [];
async function getGermanData() {
  germanData.innerHTML = "";
  let res = await axios(GERMAN_URL);
  let data = await res.data;
  copyArr4=data
  copyArr4.forEach((info) => {
    germanData.innerHTML += `
                <tr>
                  <td>${info.firstName} ${info.lastName}</td>
                  <td>${info.email}</td>
                  <td>${info.phone}</td>
                  <td>${info.subject} language</td>
                  <td>${info.date}</td>
                  <td>
                    <button class="delete" onclick=deleteBtnGerman("${info.id}") >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr> 
        `;
  });
}
getGermanData();

async function deleteBtnGerman(id, btn) {
  await axios.delete(`${GERMAN_URL}/${id}`);
  btn.closest("tr").remove();
}

