const cells = document.querySelectorAll(".cell");
const cell1 = document.getElementById("1");
const cell2 = document.getElementById("2");
const cell3 = document.getElementById("3");
const cell4 = document.getElementById("4");
const cell5 = document.getElementById("5");
const cell6 = document.getElementById("6");
const cell7 = document.getElementById("7");
const cell8 = document.getElementById("8");
const cell9 = document.getElementById("9");

const playerTurn = document.getElementById("player__turn");
const resetBtn = document.querySelector(".reset__btn");
resetBtn.style.display = "none";

let turn = 0;

function resetGame() {
  cells.forEach((cell) => {
    cell.innerHTML = "";
    cell.addEventListener("click", handleCellClick);
  });
  playerTurn.innerHTML = "Player X's turn:";
  resetBtn.style.display = "none";
  turn = 0;
}

function checkWin(c1, c2, c3) {
  return (
    c1.innerHTML.trim() &&
    c1.innerHTML === c2.innerHTML &&
    c1.innerHTML === c3.innerHTML
  );
}

function handleCellClick(e) {
  const cell = e.target;

  if (cell.childElementCount > 0) {
    return;
  }

  cell.innerHTML += `<div class=${turn % 2 === 0 ? "x" : "o"}></div>`;

  // Check for winner
  if (
    checkWin(cell1, cell2, cell3) ||
    checkWin(cell4, cell5, cell6) ||
    checkWin(cell7, cell8, cell9) ||
    checkWin(cell1, cell4, cell7) ||
    checkWin(cell2, cell5, cell8) ||
    checkWin(cell3, cell6, cell9) ||
    checkWin(cell1, cell5, cell9) ||
    checkWin(cell3, cell5, cell7)
  ) {
    playerTurn.innerHTML = `Player ${turn % 2 === 0 ? "X" : "O"} wins!`;
    resetBtn.style.display = "block";

    // Remove all event listeners one a player wins.
    cells.forEach((cell) => {
      cell.removeEventListener("click", handleCellClick);
    });
    return;
  }

  turn += 1;

  // Check for draw
  if (turn === 9) {
    playerTurn.innerHTML = "It's a draw!";
    resetBtn.style.display = "block";
  } else {
    playerTurn.innerHTML = `Player ${turn % 2 === 0 ? "X" : "O"}'s turn:`;
  }
}

// Reset the game
resetBtn.addEventListener("click", () => {
  resetGame();
});

// Attach the event listener to all cells
cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});
