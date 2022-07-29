// clicking a # button concatanates it onto the text content
// get the text content of "output" and store that into a variable
// operand button clears the output screen
// eventlistener gets the textContent of the number buttons
// number on top is previous number to operate on
// number on the bottom is the other number
// when an operation is pressed, operate on it and the top
// add the new number to the top, and clear the bottom
// onclick="operate(currentOperand,previousOperand,+)"

// TODO: remove these;
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

// TODO: add decimal system
const calculator = document.querySelector(".container");
const numBtns = calculator.querySelectorAll(".numBtn");
const displayLower = calculator.querySelector(".output-bottom");
const displayUpper = calculator.querySelector(".output-top");
const clearBtn = calculator.querySelector(".allClear");

let currentOperand = '';
let previousOperand = '';
let result = '';
let nextOperator = undefined;

function clearAll(){
    currentOperand = '';
    previousOperand = '';
    nextOperator = undefined;
    displayLower.innerText = '';
    displayUpper.innerText = '';
}
function deleteBottom(){
    currentOperand = '';
    displayLower.innerText = '';

}

// the button selects the future operation
// but first, it carries out the remaining operation "nextOperation"
// then sets nextOperation to whatever was clicked so the next

// TODO: refactor this for brevity
//     > Display portion is the same 3 lines, can be own function
function operate(num1,num2,op){
    switch(op){
        case "+":
            if(nextOperator == undefined){
                result = +currentOperand + +previousOperand;
            }
            else if(nextOperator == "+"){
                result = +currentOperand + +previousOperand;
            }
            else if(nextOperator == "-"){
                result = +previousOperand - +currentOperand;
            }
            else if(nextOperator == "*"){
                result = previousOperand * currentOperand;
            }
            else if(nextOperator == "/"){
                result = previousOperand / currentOperand;
            }

            updateDisplay(result)
            nextOperator = "+";
            break;
        case "-":
            if(nextOperator == undefined){
                result = displayLower.innerText;
            }
            else if(nextOperator == "+"){
                result = +currentOperand + +previousOperand;
            }
            else if(nextOperator == "-"){
                result = +previousOperand - +currentOperand;
            }
            else if(nextOperator == "*"){
                result = previousOperand * currentOperand;
            }
            else if(nextOperator == "/"){
                result = previousOperand / currentOperand;
            }

            updateDisplay(result)
            nextOperator = "-";
            break;
        case "*":
            if(nextOperator == undefined){
                result = displayLower.innerText;
            }
            else if(nextOperator == "+"){
                result = +currentOperand + +previousOperand;
            }
            else if(nextOperator == "-"){
                result = +previousOperand - +currentOperand;
            }
            else if(nextOperator == "*"){
                result = currentOperand * previousOperand;
            }
            else if(nextOperator == "/"){
                result = previousOperand / currentOperand;
            }

            updateDisplay(result)
            nextOperator = "*";
            break;
        case "/":
            if(nextOperator == undefined){
                result = displayLower.innerText;
            }
            else if(nextOperator == "+"){
                result = +currentOperand + +previousOperand;
            }
            else if(nextOperator == "-"){
                result = +previousOperand - +currentOperand;
            }
            else if(nextOperator == "*"){
                result = currentOperand * previousOperand;
            }
            else if(nextOperator == "/"){
                result = previousOperand / currentOperand;
            }

            updateDisplay(result)
            nextOperator = "/";
            break;
        case "=":
            if(nextOperator == undefined){
            }
            else if(nextOperator == "+"){
                result = +currentOperand + +previousOperand;
                displayLower.innerText = `${result}`;
                displayUpper.innerText = '';
       
                currentOperand = '';
                previousOperand = displayLower.innerText;
            }
            else if(nextOperator == "-"){
                result = +previousOperand - +currentOperand;
                displayLower.innerText = `${result}`;
                displayUpper.innerText = '';
       
                currentOperand = '';
                previousOperand = displayLower.innerText;
            }
            else if(nextOperator == "*"){
                result = currentOperand * previousOperand;
                displayLower.innerText = `${result}`;
                displayUpper.innerText = '';
       
                currentOperand = '';
                previousOperand = displayLower.innerText;
            }
            else if(nextOperator == "/"){
                result = previousOperand / currentOperand;
                displayLower.innerText = `${result}`;
                displayUpper.innerText = '';
       
                currentOperand = '';
                previousOperand = displayLower.innerText;
            }

            nextOperator = undefined;
            break;
    }
}

function decimalClick(){
    if(currentOperand.includes(".")){
        return;
    } else{
        displayLower.textContent += ".";
        currentOperand = displayLower.textContent;
    }
}
function updateDisplay(result){
    displayUpper.innerText = `${result}`;
    displayLower.innerText = '';
       
    previousOperand = displayUpper.innerText;
}

for(let i=0;numBtns.length;i++){
    numBtns[i].addEventListener('click',e => {
        // console.log(e.target.textContent);
        displayLower.textContent += e.target.textContent;
        currentOperand = displayLower.textContent;
    })
}
