let MESSAGE_URL = `http://localhost:3000/message`;
let messageAccordion = document.querySelector("#accordionFlushExample");
async function getMessageData() {
  messageAccordion.innerHTML = "";
  let res = await axios(MESSAGE_URL);
  let data = await res.data;
  data.forEach((info) => {
    messageAccordion.innerHTML += `
        <div class="accordion-item ">
        <h2 class="accordion-header ">
          <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${info.id}" aria-expanded="false" aria-controls="flush-collapse${info.id}">                   
          <h5>${info.lastName} ${info.firstName}</h5>
          </button>
        </h2>
        <div id="flush-collapse${info.id}" class="accordion-collapse collapse  accordionNote" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <h6>Email: <a href="mailto: ${info.email}"> ${info.email}</a> </h6>
            <h5>Subject: ${info.subject} language</h5>
            <p>Question: ${info.question}</p>
            <button class="delete " onclick=deleteMessageBtn("${info.id}")>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
                  
          `;
  });
}
getMessageData();

async function deleteMessageBtn(id, btn) {
  await axios.delete(`${MESSAGE_URL}/${id}`);
  btn.closest(".accordion-item").remove();
}


