const defaultResult = 0;
let currentResult;

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

currentResult = add(1, 2);

let calculationDescription = `(${currentResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
