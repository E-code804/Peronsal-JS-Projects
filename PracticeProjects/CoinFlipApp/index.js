let resultEl = document.getElementById("result");
let bottomEl = document.getElementById("bottom");

function displayHeadsOrTails() {

    let num = Math.floor(Math.random() * 2) + 1;

    if ( num == 2 ) {
        resultEl.innerText = "Heads";
        bottomEl.innerText = "You flipped heads!";
    } else {
        resultEl.innerText = "Tails";
        bottomEl.innerText = "You flipped tails!";
    }
}