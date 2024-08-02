function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
    
};

function operate (first,oper,second) {   //look into getting rid of add subtract multuply functions and just have htem here
    if (oper === 'add') {
        return add(first,second);
    }
    else if (oper === 'subract') {
        return subtract(first,second);
    }
    else if (oper === 'multiply') {
        return multiply(first,second);
    }
    else if (oper === 'divide') {
        return divide(first,second);
    }
    else return null;
};

let firstNum = 2;
let operand = 'divide';
let secondNum = 4;

console.log (operate(firstNum,operand,secondNum));
console.log (firstNum + operand + secondNum)