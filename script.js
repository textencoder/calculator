const resultContainer = document.getElementById('result');

let firstNumber;
let secondNumber;
let operatorInput;

function operate(a, b, operator) {
     const operations = {
         divide: a / b,
         multiply: a * b,
         subtract: a - b,
         add: a + b,
     }

    return operations[operator];
}

document.querySelector('#clear-btn').addEventListener('click', () => {
    resultContainer.textContent = 0;
})

document.querySelectorAll('#numbers button').forEach(button => {

    button.addEventListener('click', () => {
        if (!firstNumber) {
            firstNumber = Number(button.value);
            resultContainer.textContent = firstNumber;
            console.log('first number', firstNumber);
        } else if (!secondNumber) {
            secondNumber = Number(button.value);
            resultContainer.textContent = secondNumber;
            console.log('second number', secondNumber);
        }
    })
    
})

document.querySelectorAll("#operators button:not(#equal)").forEach(button => {
    button.addEventListener('click', () => {
        operatorInput = button.id;
        console.log(operatorInput);
    })
    
})

document.querySelector('#equal').addEventListener('click', () => {
    
    let result = operate(firstNumber, secondNumber, operatorInput);
    resultContainer.textContent = result;
    console.log(result);
    firstNumber = null;
    secondNumber = null;
})