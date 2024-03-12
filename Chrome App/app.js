const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 가본동작(새로고침) 막아줌
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeeting.innerText = `Hello ${username}`;
  greeeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit); //submit === click or enter
