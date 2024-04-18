const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const timeElements = document.querySelectorAll("span");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split("T")[0];
// console.log(today);
// in the console it returns something like 2024-04-18T13:06:07.715Z but we want just y-m-d
dateEl.setAttribute("min", today); //we assigned min data to be today as we can't count down towards past. To refrain user past date min is assigned today

// Populate Countdown / Complete UI
function updateDOM() {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log("distance: ", distance);

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);

    // Populate Countdown
    countdownElTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    // Hide Input
    inputContainer.hidden = true;
    // show countdown
    countdownEl.hidden = false;
  }, second);
}

// Take Values from Form Input
// Normally what happens is when we submit data it goes to a database. Here is no action that's why the page is refreshing
// We want to stop this behaviour to get the input data. To do this preventDefault() is used
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);
  // check for valid date
  if (countdownDate === "") {
    alert("Please select a date for the countdown.");
  } else {
    // Get number version of current Date, update DOM
    countdownValue = new Date(countdownDate).getTime();
    console.log("countdown value: ", countdownValue);
    updateDOM();
  }
}

// Reset all values
function reset() {
  // Hide Countdowns, show Input
  countdownEl.hidden = true;
  inputContainer.hidden = false;
  // Stop the countdown
  clearInterval(countdownActive);
  let countdownTitle = "";
  let countdownDate = "";
}

// Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
countdownBtn.addEventListener("click", reset);
