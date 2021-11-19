let count = 0;
const numberEl = document.getElementById("number");
const increaseButton = document.getElementById("inc");
const resetButton = document.getElementById("reset");
const decreaseButton = document.getElementById("dec");

increaseButton.addEventListener('click', () => {
    numberEl.innerText = ++count;
    changeNumberColor(count);
})

decreaseButton.addEventListener('click', () => {
    numberEl.innerText = --count;
    changeNumberColor(count);
})

resetButton.addEventListener('click', () => {
    count = 0;
    changeNumberColor(count)
    numberEl.innerText = count;
})

function changeNumberColor(count) {
    if ( count === 0 ) {
        numberEl.style.color = "black";
    } else if ( count > 0 ) {
        numberEl.style.color = "rgb(93, 184, 2)";
    } else {
        numberEl.style.color = "red";
    }
}