const defaultResult = 0;
let currentResult;

function add() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, ''); // 결과 출력
}

addBtn.addEventListener('click', add); 

