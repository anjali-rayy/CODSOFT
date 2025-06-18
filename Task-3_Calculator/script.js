let display = document.getElementById('result');
let expressionDisplay = document.getElementById('expression');
let currentInput = '0';
let operator = '';
let previousInput = '';
let shouldResetDisplay = false;
let isRadianMode = true;
let fullExpression = '';

function updateDisplay() {
    display.textContent = currentInput;
    expressionDisplay.textContent = fullExpression;
}

function clearAll() {
    currentInput = '0';
    operator = '';
    previousInput = '';
    shouldResetDisplay = false;
    fullExpression = '';
    updateDisplay();
}

function clearEntry() {
    currentInput = '0';
    updateDisplay();
}

function appendNumber(num) {
    if (shouldResetDisplay || currentInput === '0') {
        currentInput = num;
        shouldResetDisplay = false;
    } else {
        currentInput += num;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator && previousInput && !shouldResetDisplay) {
        calculate();
    }
    operator = op;
    previousInput = currentInput;

    // Update expression display
    let opSymbol = op === '*' ? '×' : op === '/' ? '÷' : op === '-' ? '−' : op;
    fullExpression = previousInput + ' ' + opSymbol + ' ';

    shouldResetDisplay = true;
    updateDisplay();
}

function appendFunction(func) {
    let value = parseFloat(currentInput);
    let result;
    let funcName = '';

    switch (func) {
        case 'sin':
            funcName = 'sin(' + value + ')';
            result = Math.sin(isRadianMode ? value : value * Math.PI / 180);
            break;
        case 'cos':
            funcName = 'cos(' + value + ')';
            result = Math.cos(isRadianMode ? value : value * Math.PI / 180);
            break;
        case 'tan':
            funcName = 'tan(' + value + ')';
            result = Math.tan(isRadianMode ? value : value * Math.PI / 180);
            break;
        case 'log':
            if (value <= 0) {
                alert('Invalid input for logarithm');
                return;
            }
            funcName = 'log(' + value + ')';
            result = Math.log10(value);
            break;
        case 'ln':
            if (value <= 0) {
                alert('Invalid input for natural logarithm');
                return;
            }
            funcName = 'ln(' + value + ')';
            result = Math.log(value);
            break;
        case 'sqrt':
            if (value < 0) {
                alert('Invalid input for square root');
                return;
            }
            funcName = '√(' + value + ')';
            result = Math.sqrt(value);
            break;
        case '1/x':
            if (value === 0) {
                alert('Cannot divide by zero');
                return;
            }
            funcName = '1/(' + value + ')';
            result = 1 / value;
            break;
        case '%':
            funcName = value + '%';
            result = value / 100;
            break;
        case '^':
            operator = '^';
            previousInput = currentInput;
            fullExpression = currentInput + '^';
            shouldResetDisplay = true;
            updateDisplay();
            return;
        default:
            return;
    }

    // Round to avoid floating point precision issues
    result = Math.round(result * 1000000000) / 1000000000;
    fullExpression = funcName;
    currentInput = result.toString();
    shouldResetDisplay = true;
    updateDisplay();
}

function insertConstant(value) {
    currentInput = value.toString();
    fullExpression = 'π';
    shouldResetDisplay = true;
    updateDisplay();
}

function calculate() {
    if (!operator || !previousInput) return;

    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);
    let result;
    let opSymbol = operator === '*' ? '×' : operator === '/' ? '÷' : operator === '-' ? '−' : operator;

    // Complete the expression display
    fullExpression = previousInput + ' ' + opSymbol + ' ' + currentInput;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Cannot divide by zero!');
                return;
            }
            result = prev / current;
            break;
        case '^':
            result = Math.pow(prev, current);
            fullExpression = previousInput + '^' + currentInput;
            break;
        default:
            return;
    }

    // Handle floating point precision
    result = Math.round(result * 1000000000) / 1000000000;

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    shouldResetDisplay = true;
    updateDisplay();
}

// Enhanced keyboard support
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendNumber(key);
        addRippleEffect(event);
    } else if (key === '.') {
        appendNumber('.');
        addRippleEffect(event);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendOperator(key === '*' ? '*' : key === '/' ? '/' : key);
        addRippleEffect(event);
    } else if (key === 'Enter' || key === '=') {
        calculate();
        addRippleEffect(event);
    } else if (key === 'Escape') {
        clearAll();
        addRippleEffect(event);
    } else if (key === 'Delete') {
        clearEntry();
        addRippleEffect(event);
    } else if (key === '%') {
        appendFunction('%');
        addRippleEffect(event);
    }
});

// Add ripple effect function
function addRippleEffect(event) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Initialize display and add ripple effects
updateDisplay();
addRippleEffect();
