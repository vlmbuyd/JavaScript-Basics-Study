const form = document.querySelector("form");
const input = form.querySelector("input");
const btn = document.getElementById("btn");
const ul = document.querySelector("ul");

const rest = document.querySelector(".rest");
const done = document.querySelector(".done");

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

function dbClickToDo(content, span, id, check) {
  span.remove();
  const form = document.createElement("form");
  content.appendChild(form);

  const input = document.createElement("input");
  input.setAttribute("value", span.innerText);
  form.appendChild(input);

  form.addEventListener("submit", () =>
    modifyToDo(event, content, form, input, id, check)
  );
}

function modifyToDo(event, content, form, input, id, check) {
  form.remove();
  event.preventDefault();
  const span = document.createElement("span");
  span.innerText = input.value;
  content.appendChild(span);

  check.addEventListener("click", () => checkClick(span, id));
}

let count = 0;
function deleteToDo(li) {
  li.remove();
  toDos.forEach((item, index) => {
    if (item.id === Number(li.id)) {
      toDos.splice(index, 1);
    }
  });

  count++;
  rest.innerText = `남은 할 일 : ${toDos.length}`;
  done.innerText = `남은 할 일 : ${count}`;
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

  del.addEventListener("click", () => deleteToDo(li));

  span.addEventListener("dblclick", () =>
    dbClickToDo(content, span, li.id, check)
  );
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
  rest.innerText = `남은 할 일 : ${toDos.length}`;
  paintToDo(newToDoObj);
}

form.addEventListener("submit", handleSubmit);
