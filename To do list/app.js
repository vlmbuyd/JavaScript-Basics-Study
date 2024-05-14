const form = document.querySelector("form");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const allList = document.getElementById("all-list");
const activeList = document.getElementById("active-list");
const doneList = document.getElementById("done-list");
const checkInput = document.getElementById("check-input");
const filterAll = document.getElementById("all");
const filterActive = document.getElementById("active");
const filterDone = document.getElementById("done");

const rest = document.querySelector(".rest");
const done = document.querySelector(".done");

const UNDERLINE_CLASSNAME = "underline";

let toDos = [];
let delToDos = [];
let count = 0;

function handleFilterAll() {}

function handleFilterActive() {}

function handleFilterDone(li) {
  allList.classList.add("hide");
  doneList.classList.remove("hide");
  doneList.appendChild(li);
}

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

function checkAll(check) {
  if (check.checked === false) {
    check.checked = true;
  } else {
    check.checked = false;
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

  check.addEventListener("click", () => checkAll(span, id));
}

function deleteToDo(li) {
  const delLi = li;
  li.remove();
  toDos.forEach((item, index) => {
    if (item.id === Number(li.id)) {
      toDos.splice(index, 1);
      delToDos.push(item);
    }
  });

  count++;
  rest.innerText = `남은 할 일 : ${toDos.length}`;
  done.innerText = `남은 할 일 : ${count}`;
  filterDone.addEventListener("click", () => handleFilterDone(delLi));
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  allList.appendChild(li);
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
  checkInput.addEventListener("click", () => checkAll(check));

  del.addEventListener("click", () => deleteToDo(li));

  span.addEventListener("dblclick", () =>
    dbClickToDo(content, span, li.id, check)
  );

  filterAll.addEventListener("click", () => handleFilterAll());
  filterActive.addEventListener("click", () => handleFilterActive());
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
