const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 가본동작(새로고침) 막아줌
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetngs();
}

function paintGreetngs() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeeting.innerText = `Hello ${username}`;
  greeeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); //로그인 화면 보이게
  loginForm.addEventListener("submit", onLoginSubmit); //submit === click or enter
} else {
  //localstorge에 username이 있을 때
  paintGreetngs();
}
