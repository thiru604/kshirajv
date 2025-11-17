let count = 0;

const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

incBtn.addEventListener("click", () => {
    count++;
    countEl.innerText = count;
});

decBtn.addEventListener("click", () => {
    count--;
    countEl.innerText = count;
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countEl.innerText = count;
});

