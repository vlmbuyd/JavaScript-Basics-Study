const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputAge = document.getElementById("input-age");
const inputPw = document.getElementById("input-pw");
const inputPwCheck = document.getElementById("input-pw-check");

const nameMessage = document.getElementById("name-message");
const emailMessage = document.getElementById("email-message");
const ageMessage = document.getElementById("age-message");
const pwMessage = document.getElementById("pw-message");
const pwCheckMessage = document.getElementById("pw-check-message");

const signUpBtn = document.getElementById("sign-up-btn");
const modalContainer = document.getElementById("modal-container");
const closedBtn = document.getElementById("closed");

const writeValidation = () => {
  if (inputName.value == "") {
    nameMessage.classList.add("fail-message");
    nameMessage.classList.remove("hide");
    nameMessage.innerText = "필수 입력 항목입니다!";
  } else {
    nameHandler();
  }
  if (inputEmail.value == "") {
    emailMessage.classList.add("fail-message");
    emailMessage.classList.remove("hide");
    emailMessage.innerText = "올바른 이메일 형식이 아닙니다!";
    // signUpBtn.disabled = true;
  } else {
    emailHandler();
  }

  if (inputAge.value == "") {
    ageMessage.classList.add("fail-message");
    ageMessage.classList.remove("hide");
    ageMessage.innerText = "나이를 입력해주세요!";
    // signUpBtn.disabled = true;
  } else {
    ageHandler();
  }

  pwHandler();

  if (inputPwCheck.value === "") {
    pwCheckMessage.classList.add("fail-message");
    pwCheckMessage.classList.remove("hide");
    pwCheckMessage.innerText = "비밀번호가 일치하지 않습니다.";
  } else {
    pwCheckHandler();
  }
};

const nameHandler = () => {
  if (isNaN(inputName.value)) {
    //문자열 작성 맞을 때
    nameMessage.classList.remove("hide");
    nameMessage.classList.add("success-message");
    nameMessage.innerText = "멋진 이름이에요!";
    successModal();
  }
};

const emailHandler = () => {
  const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  if (reg.test(inputEmail.value)) {
    emailMessage.classList.remove("hide");
    emailMessage.classList.add("success-message");
    emailMessage.innerText = "올바른 이메일 형식입니다!";
    successModal();
  }
};

const ageHandler = () => {
  ageMessage.classList.remove("hide");
  ageMessage.classList.add("fail-message");
  if (isNaN(inputAge.value)) {
    ageMessage.innerText = "나이는 숫자형식이어야 합니다!";
  } else if (parseFloat(inputAge.value) % 1 !== 0) {
    ageMessage.innerText = "나이는 소수가 될 수 없습니다!";
  } else if (parseInt(inputAge.value) < 0) {
    ageMessage.innerText = "나이는 음수가 될 수 없습니다!";
  } else if (parseInt(inputAge.value) < 19) {
    ageMessage.innerText = "미성년자는 가입할 수 없습니다!";
  } else {
    ageMessage.classList.remove("fail-message");
    ageMessage.classList.add("success-message");
    ageMessage.innerText = "올바른 나이 형식입니다!";
    successModal();
  }
};

const pwHandler = () => {
  let reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/;

  pwMessage.classList.add("fail-message");
  pwMessage.classList.remove("hide");
  if (inputPw.value.length < 4) {
    pwMessage.innerText = "비밀번호는 최소 4자리 이상이어야 합니다.";
  } else if (inputPw.value.length > 12) {
    pwMessage.innerText = "비밀번호는 최대 12자리까지 가능합니다.";
  } else if (!reg.test(inputPw.value)) {
    pwMessage.innerText =
      "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.";
  } else {
    pwMessage.classList.remove("fail-message");
    pwMessage.classList.add("success-message");
    pwMessage.innerText = "올바른 비밀번호입니다!";
    successModal();
  }
};

const pwCheckHandler = () => {
  if (isNaN(inputPwCheck) && inputPwCheck.value === inputPw.value) {
    pwCheckMessage.classList.remove("fail-message");
    pwCheckMessage.classList.remove("hide");
    pwCheckMessage.classList.add("success-message");
    pwCheckMessage.innerText = "올바른 비밀번호입니다!";
    successModal();
  }
};

signUpBtn.addEventListener("click", writeValidation);

const successModal = () => {
  if (
    nameMessage.innerText === "멋진 이름이에요!" &&
    emailMessage.innerText === "올바른 이메일 형식입니다!" &&
    ageMessage.innerText === "올바른 나이 형식입니다!" &&
    pwMessage.innerText === "올바른 비밀번호입니다!" &&
    pwCheckMessage.innerText === "올바른 비밀번호입니다!"
  ) {
    signUpBtn.onclick = () => {
      modalContainer.style.display = "flex";
    };
  }

  closedBtn.onclick = () => {
    modalContainer.style.display = "none";
  };
};
