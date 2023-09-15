//variable
let sendEmail = document.querySelector(".send-input"),
  email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  message = document.querySelector("#message"),
  resetBtn = document.querySelector(".reset-data"),
  form = document.querySelector(".form1");
sppiner = document.querySelector(".sppiner-img");

//eventlistener
eventlisteners();
function eventlisteners() {
  //app initilazition
  document.addEventListener("DOMContentLoaded", appInit);

  //add blur in feilds
  email.addEventListener("blur", validataField);
  subject.addEventListener("blur", validataField);
  message.addEventListener("blur", validataField);

  //reset form
  resetBtn.addEventListener("click", resetForm);

  //form submision
  form.addEventListener("submit", submitForm);
}

//function

//disabled send email inpout on load
function appInit() {
  sendEmail.disabled = true;
}

//submit form
function submitForm(e) {
  e.preventDefault();

  //add first sppiner
  const sppiner = document.querySelector(".sppiner-img");
  sppiner.style.display = "block";

  //add second sppiner
  //create img tag
  const image = document.createElement("img");
  image.src = "img/mail.gif";
  image.width = "140";
  setTimeout(() => {
    form.reset();
    image.remove();
  }, 6000);
  setTimeout(() => {
    sppiner.style.display = "none";
    //add image to html
    const sendEmailImage = document.querySelector(".sppiner");
    sendEmailImage.appendChild(image);
  }, 3000);
}

//validting filds
function validataField() {
  validateLength(this);

  //validate email field
  if (this.type === "email") {
    validateEmaile(this);
  }

  //abled send email inpout
  if (email.value != "" && subject.value != "" && message.value != "") {
    if (document.querySelectorAll(".error").length === 0) {
      sendEmail.disabled = false;
      sendEmail.classList = "curser-pointer";
    }
  }
}

//validate length of field
function validateLength(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

//validate email field

function validateEmaile(field) {
  if (field.value.includes("@")) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

// reset form
function resetForm() {
  form.reset();
}
