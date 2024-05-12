const openBtn = document.getElementById("open");
const closedBtn = document.getElementById("closed");
const modalContainer = document.getElementById("modal-container");

console.dir(modalContainer);

openBtn.onclick = () => {
  modalContainer.style.display = "flex";
};
closedBtn.onclick = () => {
  modalContainer.style.display = "none";
};
