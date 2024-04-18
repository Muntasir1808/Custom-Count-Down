const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0];
// console.log(today); 
// in the console it returns something like 2024-04-18T13:06:07.715Z but we want just y-m-d 
dateEl.setAttribute('min', today);  //we assigned min data to be today as we can't count down towards past. To refrain user past date min is assigned today
