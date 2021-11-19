const hex = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9];
let textEl = document.getElementById("bg-color-text");

function changeColors() {
    let hexString = "";

    for ( let i = 0; i < 6; i++ ) {
        hexString += hex[getRandom()];
    }

    textEl.innerText = "#" + hexString;
    document.getElementById("bg-color-text").style.color= "#" + hexString;
    document.body.style.backgroundColor = "#" + hexString;
}

function getRandom() {
    return Math.floor(Math.random() * hex.length);
}