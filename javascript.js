function operate (first,oper,second) {     // when pressing a standard operand, calculate
    if (oper === 'add') {
        return ((a, b) => parseFloat(a) + parseFloat(b))(first, second);  }
        else if (oper === 'subtract') {
            return ((a, b) => a - b)(first, second);  }
    else if (oper === 'multiply') {
        return ((a, b) => a * b)(first, second);  }
    else if (oper === 'divide') {
        return ((a, b) => a / b)(first, second);  }
    else return null;
};

function updateDisplay(text) {
    if (text === "🖕 cleared 🖕" || text === ".") {
        document.getElementById('display').textContent = text; //display the special text or dot
    } else {
        document.getElementById('display').textContent = parseFloat(text).toFixed(6).replace(/\.?0+$/, ""); //round to 6 decimal places and remove trailing zeros
    }
};
function clickNumber(buttonId) {
    if (firstNum === null) {               //in case of nulls set them to not
        firstNum = '';
    };
    if (secondNum === null) {
        secondNum = '';}
    if (operand === '') {  //when you are on the first number concat to the first number variable
        if (firstNum.toString().includes('.') && buttonId==='.') {
            return;
        }
        firstNum = firstNum + buttonId;
        updateDisplay(firstNum);
    }
    else {                  // else concat to the second number variable
        if (secondNum.includes('.') && buttonId==='.') {
            return;
        }
        secondNum = secondNum + buttonId;
        updateDisplay(secondNum);
    };               
};

function clickOperand(buttonId) {
    if (firstNum === null) {               //in case of nulls set them to not
        firstNum = '';
    };
    if (secondNum === null) {
        secondNum = '';
    };
    if (buttonId==='clear') {
        firstNum = ''; secondNum = ''; operand = '';
        updateDisplay('cleared');
        return;
       
    };
    if (buttonId==='equals') {       //if equals operand
        if (parseFloat(secondNum)===0 && operand ==='divide') {
            updateDisplay("🖕 cleared 🖕");
            firstNum = ''; operand = ''; secondNum = '';
            return;
        }
        if (secondNum==='' ) {          //if there is no second number to do a function against just return the first Number
            return;
        }
        if (firstNum === '') {return;} 
        else {                          // if there is a second number perform the calculation, make the result hte firstNum
            firstNum = operate(firstNum, operand, secondNum);
            operand = '';            // now that firstNumber is the calculated result, get rid of the operand and secondnum
            secondNum ='';
            updateDisplay(firstNum);   //display the new firstNum on screen
            return;
        }
    }
    else {                      // if not equals operand
        if (secondNum==='')  {  //if secondNumber is blank then just modify operand 
            operand = buttonId;
            return;
        }       
        else {                  //if secondNumber is NOT blank then perform operation
            if (parseFloat(secondNum)===0 && operand ==='divide') {
                updateDisplay("🖕 cleared 🖕");
                firstNum = ''; operand = ''; secondNum = '';
                return;
            }
            firstNum = operate(firstNum,operand,secondNum);  // make firstnum the original operand calculation not input
            operand = buttonId;                          //add the operand so now we have firstNum and Operand 
            updateDisplay(firstNum);
            secondNum = '';
            return;
        }
    }
};

let firstNum = ''; let secondNum= ''; let operand= ''; let display = '';  //initialize variables

document.querySelector('.buttons').addEventListener('click', function(event) {   //do stuff on click
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
                if (firstNum === '') {return;}    //no operation if theres no first number
                console.log('you made it here2');
                clickOperand(buttonId);
                break;
            default:
                console.log('No matching button');
        }
    }});