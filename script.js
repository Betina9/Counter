function increment() {
  console.log("The button was clicked");

let count = 0;

const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("Increment-btn");
const resetBtn = document.getElementById("Reset-btn");

incrementBtn.addEventListener("click", function () {
  count += 1;
  countEl.textContent = count;
});

resetBtn.addEventListener("click", function () {
  count = 0;
  countEl.textContent = count;
});