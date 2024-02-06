const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(usrInput.value); //정수로 변환
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // 결과 출력 (from vender file)
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enterdNumber;
  createAndWriteOutput("+", initialResult, enterdNumber); //결과 출력
  writeToLog("ADD", initialResult, enterdNumber, currentResult);
}

function subtract() {
  const enterdNumber = getUserNumberInput(); // 다른 함수이기에 변수 이름 재사용 가능
  const initialResult = currentResult;
  currentResult -= enterdNumber;
  createAndWriteOutput("-", initialResult, enterdNumber);
  writeToLog("SUBTRACT", initialResult, enterdNumber, currentResult);
}

function multiply() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enterdNumber;
  createAndWriteOutput("*", initialResult, enterdNumber);
  writeToLog("MULTIPLY", initialResult, enterdNumber, currentResult);
}

function divide() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enterdNumber;
  createAndWriteOutput("/", initialResult, enterdNumber);
  writeToLog("DIVIDE", initialResult, enterdNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
