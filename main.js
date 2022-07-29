// clicking a # button concatanates it onto the text content
// get the text content of "output" and store that into a variable
// operand button clears the output screen
// eventlistener gets the textContent of the number buttons
// number on top is previous number to operate on
// number on the bottom is the other number
// when an operation is pressed, operate on it and the top
// add the new number to the top, and clear the bottom

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

const calculator = document.querySelector(".container");
const numBtns = calculator.querySelectorAll(".numBtn");
const displayLower = calculator.querySelector(".output-bottom");
const displayUpper = calculator.querySelector(".output-top");
const clearBtn = calculator.querySelector(".allClear");

let currentOperand = '';
let previousOperand = '';
let value1, value2;

function clearAll(){
    value1 = undefined;
    value2 = undefined;
    currentOperand = '';
    previousOperand = '';
    displayLower.innerText = '';
    displayUpper.innerText = '';
}
function deleteBottom(){
    currentOperand = '';

}
function operate(num1, num2, op){
    switch(op){
        case "+":
            return add(num1,num2);
            break;
        case "-":
            return subtract(num1,num2);
            break;
        case "*":
            return multiply(num1,num2);
            break;
        case "/":
            return divide(num1,num2);
            break;
    }
}

for(let i=0;numBtns.length;i++){
    numBtns[i].addEventListener('click',e => {
        // console.log(e.target.textContent);
        displayLower.textContent += e.target.textContent;
        value1 = displayLower.textContent;
    })
}