const toDoForm = document.querySelector(".todo-form");
const input = document.querySelector("input");
const toDoList = document.querySelector(".todo-list");
const doneList = document.querySelector(".done-list");

const paintToDo = () => {
  const toDoInput = input.value;
  input.value = "";
  let li = document.createElement("li");
  li.innerText = toDoInput;
  let btn = document.createElement("button");
  btn.innerText = "완료";
  li.appendChild(btn);
  toDoList.appendChild(li);

  btn.addEventListener("click", () => {
    li.remove();
    doneList.appendChild(li);
    btn.innerText = "삭제";

    btn.addEventListener("click", () => {
      li.remove();
    });
  });
};

toDoForm.addEventListener("submit", paintToDo);
