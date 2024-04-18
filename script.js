const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = ''

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0];
// console.log(today); 
// in the console it returns something like 2024-04-18T13:06:07.715Z but we want just y-m-d 
dateEl.setAttribute('min', today);  //we assigned min data to be today as we can't count down towards past. To refrain user past date min is assigned today

// Take Values from Form Input
// Normally what happens is when we submit data it goes to a database. Here is no action that's why the page is refreshing
// We want to stop this behaviour to get the input data. To do this preventDefault() is used
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownTitle, countdownDate);
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);