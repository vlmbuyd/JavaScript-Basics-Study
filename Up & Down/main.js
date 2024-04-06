const form = document.querySelector("form");
const input = document.querySelector("input");
const count = document.querySelector(".count");
const updown = document.querySelector(".up-down");

const randomNumber = Math.floor(Math.random() * 100 + 1);

let countNum = 0;

const inputSubmit = () => {
  let num = input.value;
  input.value = "";
  countNum++;
  count.textContent = `시도 횟수: ${countNum}`;
  logUpDown(num);
};

const logUpDown = (num) => {
  console.log(randomNumber);
  if (num > randomNumber) {
    updown.textContent = "DOWN!";
  } else if (num < randomNumber) {
    updown.textContent = "UP!";
  } else {
    updown.textContent = "축하합니다! 정답입니다.";
  }
};

form.addEventListener("submit", inputSubmit);
