const form = document.getElementById("todo-form");
const input = form.querySelector("input");
const btn = document.getElementById("btn");
const todo = document.querySelector(".todo");
const ul = document.querySelector("ul");

const checkClick = (i) => {
  if (
    ul.children[i].querySelector("li").style.textDecorationLine ===
    "line-through"
  ) {
    ul.children[i].querySelector("li").style.textDecorationLine = "";
  } else {
    ul.children[i].querySelector("li").style.textDecorationLine =
      "line-through";
  }
};

function paintToDo(newToDo) {
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerText = newToDo;
  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  li.appendChild(check);
  let del = document.createElement("span");
  li.appendChild(del);
  del.innerText = "❌";

  check.addEventListener("click", checkClick);
}

function handleSubmit(event) {
  event.preventDefault();
  const newToDo = input.value;
  input.value = "";
  paintToDo(newToDo);
}

form.addEventListener("submit", handleSubmit);
