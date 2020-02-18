"use strict";
window.addEventListener("DOMContentLoaded", start);

const number = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let bar;
let numberofbar;

function start() {
  if (number.length < 20) number.push(getNumberOfCustomers());
  else {
    number.shift();
    number.push(getNumberOfCustomers());
  }
  setHeight();
}

function setHeight() {
  for (let i = 0; i < number.length; i++) {
    bar = document.querySelector(`#bars > div:nth-child(${i + 1})`);
    bar.style.setProperty("--height", number[i]);
    numberofbar = document.querySelector(`#nums > div:nth-child(${i + 1})`);
    numberofbar.textContent = number[i];
  }
  document.querySelectorAll("#numbers > div").forEach(
    (numofbar, i) =>
      function() {
        numberofbar.innerHTML = number[i];
      }
  );

  setTimeout(start, 1000);
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}
