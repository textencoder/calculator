const resultContainer = document.getElementById("result");

let firstNumber = '';
let secondNumber = '';
let operatorInput = null;
let operatorHit = false;
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
  resetValues();
  result = null;
  updateResultContainer(0);
  enableOperators();
});

document.querySelectorAll("#numbers button").forEach((button) => {
  button.addEventListener("click", () => {
    if (result && operatorHit) {
      firstNumber = result;
      secondNumber += button.value;
      updateResultContainer(secondNumber);
      console.log("second number", secondNumber);
      return;
    }

    if (!operatorHit) {
      firstNumber += button.value;
      updateResultContainer(firstNumber);
      console.log("first number", firstNumber);
    } else if (operatorHit) {
      secondNumber += button.value;
      updateResultContainer(secondNumber);
      console.log("second number", secondNumber);
    }
  });
});

document.querySelectorAll("#operators button:not(#equal)").forEach((button) => {
  button.addEventListener("click", () => {
    operatorInput = button.id;
    operatorHit = true;
    disableOperators();
    console.log(operatorInput);
  });
});

document.querySelector("#equal").addEventListener("click", () => {
  if (firstNumber && secondNumber && operatorInput) {
      if (Number(firstNumber) == 0 || Number(secondNumber) == 0) {
        updateResultContainer('invalid');
        resetValues();
        return;
      }
      result = operate(Number(firstNumber), Number(secondNumber), operatorInput);
      if (result % 1 == 0) {
        updateResultContainer(result);
      } else if (result % 1 != 0) {
        result = Number(result.toFixed(2));
        updateResultContainer(result);
      }
      console.log("result", result);
      resetValues();
    }
  }
);

function updateResultContainer(num) {
  resultContainer.textContent = num;
}

function resetValues() {
      firstNumber = '';
      secondNumber = '';
      operatorInput = null;
      operatorHit = false;
      enableOperators();
}

function disableOperators() {
  document.querySelectorAll("#operators button:not(#equal)").forEach(button => {
    button.disabled = true;
  })
}

function enableOperators() {
  document.querySelectorAll("#operators button:not(#equal)").forEach(button => {
    button.disabled = false;
  })
}