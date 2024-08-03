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
function operate (first,oper,second) {  
    console.log(`${firstNum} ${operand} ${secondNum}` );
    console.log(oper);
    console.log(oper==='subtract');
    if (oper === 'add') {
        console.log(`${firstNum} + ${operand} + ${secondNum}` );
        return add(first,second);
    }
        else if (oper === 'subtract') {
        console.log(`${firstNum} + ${operand} + ${secondNum}` );
        return subtract(first,second);
    }
    else if (oper === 'multiply') {
        console.log(`${firstNum} + ${operand} + ${secondNum}` );
        return multiply(first,second);
    }
    else if (oper === 'divide') {
        console.log(`${firstNum} + ${operand} + ${secondNum}` );
        return divide(first,second);
    }
    else return null;
};

function updateDisplay(text) {
    document.getElementById('display').textContent = text;
};
function checkforDot (string) {
string.includes('.');
}
function clickNumber(buttonId) {
    if (operand === '') {  //when you are on the first number concat to the first number variable
        if (firstNum.includes('.')) {
            return;
        }
        firstNum = firstNum + buttonId;
        updateDisplay(firstNum);
    }
    else {                  // else concat to the second number variable
        if (secondNum.includes('.')) {
            return;
        }
        secondNum = secondNum + buttonId;
        updateDisplay(secondNum);
    };               
};

function clickOperand(buttonId) {
    if (firstNum === null) {
        firstNum = '';
    };
    if (secondNum === null) {
        secondNum = '';
    };
    console.log(`${firstNum} ${operand} ${secondNum}` );
    if (buttonId==='equals') {       //if equals operand
        console.log(`${firstNum} ${operand} ${secondNum}` );
        if (secondNum==='' ) {          //if there is no second number to do a function against just return the first Number
            console.log(`${firstNum} ${operand} ${secondNum}` );
            return;
        }
        else {                          // if there is a second number perform the calculation, make the result hte firstNum
            firstNum = operate(firstNum, operand, secondNum);
            console.log(`${firstNum} ${operand} ${secondNum}` );
            operand = '';            // now that firstNumber is the calculated result, get rid of the operand and secondnum
            secondNum ='';
            updateDisplay(firstNum);   //display the new firstNum on screen
            console.log(`${firstNum} ${operand} ${secondNum}` );
            return;
        }
    }
    else {                      // if not equals operand
        if (secondNum==='')  {  //if secondNumber is blank then just modify operand 
            operand = buttonId;
            console.log(`${firstNum} ${operand} ${secondNum}` );
            return;
        }       
        else {                  //if secondNumber is NOT blank then perform operation
            firstNum = operate(firstNum,operand,secondNum);  // make firstnum the original operand calculation not input
            operand = buttonId;                          //add the operand so now we have firstNum and Operand 
            updateDisplay(firstNum);
            console.log(`${firstNum} ${operand} ${secondNum}` );
            return;
        }
    }
};

let firstNum = '';
let secondNum = '';
let operand = '';
let display = '';

document.querySelector('.buttons').addEventListener('click', function(event) {
    if (event.target && event.target.tagName === 'BUTTON') {
        const buttonId = event.target.id;
        const buttonClass= event.target.className;

        switch(buttonClass) {
            case 'number':
                // Function for numbers
                clickNumber(buttonId);
                break;
            case 'operand':
                // Function for operands
                clickOperand(buttonId);
                break;
            default:
                console.log('No matching button');
                console.log(buttonClass + ' ' + buttonId)
        }
    }});