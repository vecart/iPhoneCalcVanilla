//DISPLAY AND BUTTONS
//DOM ELEMENTS
//grab every button, including display
const display = document.querySelector('.display');
//function buttons
const ac = document.querySelector('.ac');
const pm = document.querySelector('.pm');
const percent = document.querySelector('.percent');
//operator buttons
const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const equal = document.querySelector('.equal');
//number buttons
const decimal = document.querySelector('.decimal');
const number0 = document.querySelector('.number-0');
const number1 = document.querySelector('.number-1');
const number2 = document.querySelector('.number-2');
const number3 = document.querySelector('.number-3');
const number4 = document.querySelector('.number-4');
const number5 = document.querySelector('.number-5');
const number6 = document.querySelector('.number-6');
const number7 = document.querySelector('.number-7');
const number8 = document.querySelector('.number-8');
const number9 = document.querySelector('.number-9');
//will need to loop through numbers, array
const numberArray = [
    number0, number1, number2, number3, number4, number5, number6, number7, number8, number9
];

//Invoke Functions
//Changing numbers to string so they aggregate rather than add
const handleNumberClick = (numString) => {
    const currentDisplayString = display.textContent;
    if (currentDisplayString === '0') {
        display.textContent = numString;
    } else {
        display.textContent = currentDisplayString + numString;
    } 
};

//ADD EVENT LISTENERS - Numbers and Buttons
for (let i = 0; i < numberArray.length; i++) {
    const number = numberArray[i];
    number.addEventListener('click', () => {
        handleNumberClick(i.toString());
    })
}