"use strict";
window.addEventListener("DOMContentLoaded", start);

const num = [];
let counter = 0;

function start() {
  if (num.length < 9) num.unshift(counter++);
  else {
    num.unshift(counter++);
    num.pop();
  }

  console.log(num);

  setTimeout(start, 500);
}
