const resultContainer = document.getElementById("result");

let firstNumber = null;
let secondNumber = null;
let operatorInput = null;
let result = null;

function operate(a, b, operator) {
  const operations = {
    divide: a / b,
    multiply: a * b,
    subtract: a - b,
    add: a + b,
  };

  return operations[operator];
}

document.querySelector("#clear-btn").addEventListener("click", () => {
  firstNumber = null;
  secondNumber = null;
  result = null;
  updateResultContainer(0);
});

document.querySelectorAll("#numbers button").forEach((button) => {
  button.addEventListener("click", () => {
    if (result) {
      firstNumber = result;
      secondNumber = Number(button.value);
      updateResultContainer(secondNumber);
      return;
    } else if (!firstNumber) {
      firstNumber = Number(button.value);
      updateResultContainer(firstNumber);
      console.log("first number", firstNumber);
    }

    if (firstNumber && operatorInput && !secondNumber) {
      secondNumber = Number(button.value);
      updateResultContainer(secondNumber);
      console.log("second number", secondNumber);
    }
  });
});

document.querySelectorAll("#operators button:not(#equal)").forEach((button) => {
  button.addEventListener("click", () => {
    operatorInput = button.id;
    console.log(operatorInput);
  });
});

document.querySelector("#equal").addEventListener("click", () => {
  if (firstNumber && secondNumber && operatorInput) {
    if (firstNumber == 0 && operatorInput == "multiply") {
      result = 0;
      updateResultContainer(result);
      console.log(result);
    } else {
      result = operate(firstNumber, secondNumber, operatorInput);
      if (result % 1 == 0) {
        updateResultContainer(result);
      } else if (result % 1 != 0) {
        result = Number(result.toFixed(2));
        updateResultContainer(result);
      }
      console.log("result", result);
      firstNumber = null;
      secondNumber = null;
      operatorInput = null;
    }
  }
});

function updateResultContainer(num) {
  resultContainer.textContent = num;
}
