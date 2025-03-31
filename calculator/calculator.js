const equationElement = document.querySelector('.equation');
const resultElement = document.querySelector('.result');
const buttons = document.querySelectorAll('button');
let equation = '';
let result = '0';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'CLEAR') {
            equation = '';
            result = '0';
        } else if (value === 'DELETE') {
            equation = equation.slice(0, -1);
        } else if (value === '=') {
            try {
                const expression = equation
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/');
                result = eval(expression).toString();
                equation = '';
            } catch (error) {
                result = 'Error';
            }
        } else {
            equation += value;
        }

        if (value !== '=' && value !== 'CLEAR' && value !== 'DELETE') {
            result = evalEquation(equation);
        }

        updateDisplay();
    });
});

function evalEquation(equation) {
    try {
        const expression = equation
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
        return eval(expression) || '0';
    } catch {
        return '0';
    }
}

function updateDisplay() {
    equationElement.textContent = equation;
    resultElement.textContent = result;
}