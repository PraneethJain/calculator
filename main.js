const add = (a,b) => a+b;
const subtract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a/b;

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}

let displayValue = '';
const output = document.querySelector('.output')

const Buttons = document.querySelectorAll('.btn');
Buttons.forEach(button => {
    button.addEventListener('click', e=> {
        if (displayValue === '0') displayValue = '';
        displayValue += e.target.id;
        output.textContent = displayValue;
    })
})

const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', e=> {
    displayValue = '0';
    output.textContent = displayValue;
})