let valOne = [], valTwo = [], chosenOperator = '', validOperators = ["+", "-", "*", "/", "=", "clear"];

const buttonSize = "90px";

function add(numOne, numTwo){
    return numOne + numTwo;
}

function subtract(numOne, numTwo){
    return numOne - numTwo;
}

function multiply(numOne, numTwo){
    return numOne * numTwo;
}

function divide(numOne, numTwo){
    return numOne / numTwo;
}

function operation(numOne, numTwo, operator){
    switch(operator){
        case ('+'): return add(numOne, numTwo);
        case ('-'): return subtract(numOne, numTwo);
        case ('*'): return multiply(numOne, numTwo);
        case ('/'): return divide(numOne, numTwo);
    }
}

function createNumberButtons(btnAmt){
    for(let i = 0; i < btnAmt; i++){
        const buttons = document.createElement("button");

        buttons.textContent = `${i}`;
        buttons.style.height = buttonSize;
        buttons.style.width = buttonSize;

        buttons.addEventListener("click", () => {selectValueToAppend(buttons.textContent)});

        divButtons.appendChild(buttons);
    }
}

function createOperatorButtons(){
    for(let i = 0; i < validOperators.length; i++){
        const buttons = document.createElement("button");
        buttons.textContent = `${validOperators[i]}`;
        buttons.style.height = buttonSize;
        buttons.style.width = buttonSize;
        divButtons.appendChild(buttons);

        buttons.addEventListener("click", () => {selectOperatorButtonFunction(validOperators[i])});

    }
}

function selectOperatorButtonFunction(operator){
    switch(operator){
        case ('+'): chosenOperator = '+'; break;
        case ('-'): chosenOperator = '-'; break;
        case ('*'): chosenOperator = '*'; break;
        case ('/'): chosenOperator = '/'; break;
        case ('='): resultValues(); break;
        case ('clear'): clearEverything(); break;
    }
}

function resultValues(){
    // convert string array to integer
    valOne = parseInt(valOne.join(""));
    valTwo = parseInt(valTwo.join(""));
    valOne = [operation(valOne, valTwo, chosenOperator)];
    valTwo = [];
    chosenOperator = '';
}

function clearEverything(){
    valOne = [];
    valTwo = [];
    chosenOperator = '';
}

function selectValueToAppend(num){
    let chosenArray;
    if (chosenOperator === ''){
        chosenArray = valOne;
    } else {
        chosenArray = valTwo;
    }

    userAppendNum(num, chosenArray);
}

function userAppendNum(num, val){
    let valArray = val;

    valArray = valArray.push(num);
    valArray = val.join("");
}



// user interface section

const divCalculator = document.querySelector("#calculator");
const divDisplay = document.querySelector(".display");
const sizeBasedText = document.querySelector("#title");

// calculator size base
const calculatorWidth = sizeBasedText.offsetWidth * 1.2;

// total calculator size
divCalculator.style.height = `${calculatorWidth * 1.2}px`;
divCalculator.style.width = `${calculatorWidth}px`;

// display
divDisplay.style.height = `${calculatorWidth * 0.2}px`;
divDisplay.style.border = "2px solid black";

// buttons
const divButtons = document.querySelector(".buttonFields");



createNumberButtons(10);
createOperatorButtons();