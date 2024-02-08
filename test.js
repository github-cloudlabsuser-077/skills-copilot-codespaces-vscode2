// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    return a / b;
}

// Function to calculate the result based on operator and operands
function calculate(operator, operand1, operand2) {
    switch (operator) {
        case '+':
            return add(operand1, operand2);
        case '-':
            return subtract(operand1, operand2);
        case '*':
            return multiply(operand1, operand2);
        case '/':
            return divide(operand1, operand2);
        default:
            return 'Invalid operator';
    }
}

// Example usage
const operator = '+';
const operand1 = 5;
const operand2 = 3;
const result = calculate(operator, operand1, operand2);
console.log(`The result of ${operand1} ${operator} ${operand2} is ${result}`);