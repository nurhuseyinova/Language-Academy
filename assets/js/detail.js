let TEACHERS_URL = `http://localhost:8000/teachers`;
let detailCard = document.querySelector(".detailCard");
let id=new URLSearchParams(window.location.search).get("id")

axios(`${TEACHERS_URL}/${id}`).then(res=>{
    detailCard.innerHTML = `
    <div class="detailInformation">
    <div class="detailImg">
      <img data-aos="slide-left" src="${res.data.photo}" alt="" />
    </div>
    <div data-aos="slide-left" class="detailNote">
      <h3>Name: ${res.data.firstName}</h3>
      <h3>Surname: ${res.data.lastName}</h3>
      <h5>Subject: ${res.data.subject} teacher</h5>
      <h5>Experience: ${res.data.experience}</h5>
      <h6>Email: <a href="mailto:${res.data.email}">${res.data.email}</a></h6>
      <p>Information: ${res.data.information}</p>
    </div>
  </div> 
        `;

})