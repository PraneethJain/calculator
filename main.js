function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
    }
}

let displayValue = '';
let currentValue = 0;
let operatorSelected = false;
let currentOperator = null;
const output = document.querySelector('.output');

const Buttons = document.querySelectorAll('.btn');
Buttons.forEach(button => {
    button.addEventListener('click', e=> {
        if (!operatorSelected && !e.target.classList.contains('operator')) {
            displayValue = e.target.id;
            currentValue = parseInt(displayValue);
        } else if (operatorSelected && !e.target.classList.contains('operator')){
            displayValue += e.target.id;
            currentValue = operate(currentOperator, currentValue, parseInt(e.target.id))
            operatorSelected = false;
            currentOperator = null;
        } else if (!operatorSelected && e.target.classList.contains('operator')) {
            displayValue = currentValue.toString();
            operatorSelected = true;
            currentOperator = e.target.id;
            displayValue += e.target.id;
        }
        output.textContent = displayValue;
    })
})

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', e=> {
    displayValue = '0';
    output.textContent = displayValue;
    currentValue = 0;
    operatorSelected = false;
    currentOperator = null;
})

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', e=> {
    displayValue = currentValue.toString();
    output.textContent = displayValue;
})