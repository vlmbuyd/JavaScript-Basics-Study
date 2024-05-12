const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

let num = 0;

increase.addEventListener("click", () => {
  num++;
  number.textContent = num;
});

decrease.addEventListener("click", () => {
  num--;
  number.textContent = num;
});
