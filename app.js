/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let sum =  ""

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const value = document.querySelector('#display');
const display = document.querySelector(".display");



/*----------------------------- Event Listeners -----------------------------*/



calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    // console.log(event.target.innerText);


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

function updateDisplay(content) {
    display.innerText = content;
}