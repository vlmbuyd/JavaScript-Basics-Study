const form = document.querySelector("form");
const input = form.querySelector("input");
const btn = document.getElementById("btn");
const ul = document.querySelector("ul");

const UNDERLINE_CLASSNAME = "underline";

let toDos = [];

function checkClick(span, id) {
  for (const el of toDos) {
    if (Number(id) === el.id) {
      if (el.isDone === false) {
        el.isDone = true;
        span.classList.toggle(UNDERLINE_CLASSNAME);
      } else {
        el.isDone = false;
        span.classList.toggle(UNDERLINE_CLASSNAME);
      }
    }
  }
}

function dbClickToDo(content, span) {
  span.remove();
  const form = document.createElement("form");
  content.appendChild(form);

  const input = document.createElement("input");
  input.setAttribute("value", span.innerText);
  form.appendChild(input);

  form.addEventListener("submit", () =>
    modifyToDo(event, content, form, input)
  );
}

function modifyToDo(event, content, form, input) {
  form.remove();
  event.preventDefault();
  const span = document.createElement("span");
  span.innerText = input.value;
  content.appendChild(span);
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.id = newToDo.id;

  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  li.appendChild(check);

  const content = document.createElement("div");
  li.appendChild(content);

  const span = document.createElement("span");
  span.innerText = newToDo.text;
  content.appendChild(span);

  const del = document.createElement("span");
  del.innerText = "❌";
  li.appendChild(del);

  check.addEventListener("click", () => checkClick(span, li.id));
  del.addEventListener("click", () => {
    li.remove();
  });
  span.addEventListener("dblclick", () => dbClickToDo(content, span));
}

function handleSubmit(event) {
  event.preventDefault();
  const newToDo = input.value;
  input.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
    isDone: false,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
}

form.addEventListener("submit", handleSubmit);
