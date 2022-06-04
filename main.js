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


let currentValue = 0;
let currentOperator = null;
let input = ''
let input2 = ''
let num1 = null;
let num2 = null;
const output = document.querySelector('.output');

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (e.target.classList.contains('operator')) {
            if (num1 === null) {
                num1 = parseInt(input);
            } else if (num2===null && input2!=='') {
                num2 = parseInt(input2);
                num1 = operate(currentOperator, num1, num2);
                input2 = '';
                input = num1.toString()
                num2 = null;
            }
            currentOperator = e.target.id;
            input += currentOperator;
        }
        if (!e.target.classList.contains('operator')) {
            if (input!=='0') {
                input += e.target.id;
            } else if (input ==='0') {
                input = e.target.id;
            }
            if (num1 !== null) {
                input2 += e.target.id;
            }
        }
        output.textContent = input;
        console.log(num1);

        if (input2==='') {
            equalsButton.style.pointerEvents = 'none';
        } else {
            equalsButton.style.pointerEvents = 'auto';
        }
    })
})

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', e=> {
    currentValue = 0;
    currentOperator = null;
    input = '0'
    input2 = ''
    num1 = null;
    num2 = null;
    output.textContent = input;
})

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', e=> {
    num2 = parseInt(input2);
    num1 = operate(currentOperator, num1, num2);
    input2 = '';
    num2 = null;
    input = num1.toString();
    output.textContent = input;
})