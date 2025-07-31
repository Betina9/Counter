let count = 0;
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("Increment-btn");
const resetBtn = document.getElementById("Reset-btn");

function increment() {
  console.log("The button was clicked");
  count += 1;
  countEl.textContent = count;
}

function reset() {
  count = 0;
  countEl.textContent = count;
}

incrementBtn.addEventListener("click", increment);
resetBtn.addEventListener("click", reset);
