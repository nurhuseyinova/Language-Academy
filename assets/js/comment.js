let COMMENT_URL = `http://localhost:3000/comment`;
let commentData = document.querySelector("#commentData");
let commentCopyArr = [];
async function getCommentsData() {
  commentData.innerHTML = "";
  let res = await axios(COMMENT_URL);
  let data = await res.data;
  commentCopyArr = data;
  commentCopyArr.forEach((graduate) => {
    commentData.innerHTML += `
                  <tr>
                    <td><img src="${graduate.photo}" alt="" /></td>
                    <td>${graduate.firstName} ${graduate.lastName}</td>
                    <td>${graduate.subject}</td>
                    <td>${graduate.comment}</td>
                    <td>${graduate.date}</td>
                   <td>
                      <button class="delete" onclick=deleteCommentBtn("${graduate.id}") >
                        <i class="fa-solid fa-trash"></i>
                      </button>           
                    </td>
                  </tr> 
          `;
  });
}
getCommentsData();

async function deleteCommentBtn(id, btn) {
  await axios.delete(`${COMMENT_URL}/${id}`);
  btn.closest("tr").remove();
}
