let COMMENTS_URL = `http://localhost:3000/comment`;
let commentSlide = document.querySelector(".commentSlide");
let commentCopyArr = [];
async function getCommentData() {
    commentSlide.innerHTML = "";
  let res = await axios(COMMENTS_URL);
  let data = await res.data;
  commentCopyArr = data;
  commentCopyArr.forEach((graduate) => {
    commentSlide.innerHTML += `
    <div class="swiper-slide">
    <div class="item">
      <div class="commentNote">
        <p>
          ${graduate.comment.slice(0,200)}
        </p>
      </div>
      <div class="itemImg">
        <img src=" ${graduate.photo}" alt="" />
        <div class="imgNote">
          <h3> ${graduate.firstName}  ${graduate.lastName}</h3>
          <p> ${graduate.subject} language</p>
        </div>
      </div>
    </div>
  </div>
                 
          `;
  });
}
getCommentData();