/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let sum =  ""

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const value = document.querySelector('#display');
const display = document.querySelector(".display");



/*----------------------------- Event Listeners -----------------------------*/


// Parent listening on every single click
calculator.addEventListener('click', (event) => {

    const value = event.target.innerText;

    if (event.target.classList.contains('number')) {
        sum += value
        updateDisplay(value)
    }

    if (event.target.classList.contains('operator')) {
        sum += `${value}`;
        updateDisplay(sum);
    }

    if (event.target.innerText === 'C') {
        sum = "";
        updateDisplay(0)
    }

    if (event.target.classList.contains("equals")) {
        let result = eval(sum)
        sum = result.toString()
        updateDisplay(sum)
    }
});


/*-------------------------------- Functions --------------------------------*/

// Update display of numbers on the calculator
function updateDisplay(content) {
    display.innerText = content;
}