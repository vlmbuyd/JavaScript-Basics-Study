const form = document.getElementById("todo-form");
const input = form.querySelector("input");
const btn = document.getElementById("btn");
const todo = document.querySelector(".todo");

function paintToDo(newToDo) {
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let del = document.createElement("span");
  ul.appendChild(li);
  ul.appendChild(del);
  li.innerText = newToDo;
  del.innerText = "❌";
  todo.appendChild(ul);
}

function handleSubmit(event) {
  event.preventDefault();
  const newToDo = input.value;
  input.value = "";
  paintToDo(newToDo);
}

form.addEventListener("submit", handleSubmit);
