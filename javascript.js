// initialize the player
let player = "X";

// assign the player to the opposite of the current player
const assignPlayer = (player1) => {
  if (player1 === "X") {
    player = "O";
  } else {
    player = "X";
  }
};

// declare the cells for convenience
const cell0 = document.getElementById("0");
const cell1 = document.getElementById("1");
const cell2 = document.getElementById("2");
const cell3 = document.getElementById("3");
const cell4 = document.getElementById("4");
const cell5 = document.getElementById("5");
const cell6 = document.getElementById("6");
const cell7 = document.getElementById("7");
const cell8 = document.getElementById("8");

const celebrate = () => {
  // announce the dub
  document.getElementById("player").innerHTML = `${player} Wins!`;

  // reset after 3 seconds
  setTimeout(() => {
    reset();
  }, 3000);
};

// reset the board
const reset = () => {
  player = "X";
  document.getElementById("player").innerHTML = "X's Turn";
  cell0.innerHTML = "";
  cell1.innerHTML = "";
  cell2.innerHTML = "";
  cell3.innerHTML = "";
  cell4.innerHTML = "";
  cell5.innerHTML = "";
  cell6.innerHTML = "";
  cell7.innerHTML = "";
  cell8.innerHTML = "";
};

// checks for winning combos, celebrates if found, otherwise updates the player
const checkWinner = () => {
  if (
    cell0.innerHTML === player &&
    cell1.innerHTML === player &&
    cell2.innerHTML === player
  ) {
    celebrate();
  } else if (
    cell3.innerHTML === player &&
    cell4.innerHTML === player &&
    cell5.innerHTML === player
  ) {
    celebrate();
  } else if (
    cell6.innerHTML === player &&
    cell7.innerHTML === player &&
    cell8.innerHTML === player
  ) {
    celebrate();
  } else if (
    cell0.innerHTML === player &&
    cell3.innerHTML === player &&
    cell6.innerHTML === player
  ) {
    celebrate();
  } else if (
    cell1.innerHTML === player &&
    cell4.innerHTML === player &&
    cell7.innerHTML === player
  ) {
    celebrate();
  } else if (
    cell2.innerHTML === player &&
    cell5.innerHTML === player &&
    cell8.innerHTML === player
  ) {
    celebrate();
  } else if (
    cell0.innerHTML === player &&
    cell4.innerHTML === player &&
    cell8.innerHTML === player
  ) {
    celebrate();
  } else if (
    cell2.innerHTML === player &&
    cell4.innerHTML === player &&
    cell6.innerHTML === player
  ) {
    celebrate();
  } else {
    assignPlayer(player);
    document.getElementById("player").innerHTML = `${player}'s Turn`;
  }
};

// handles the click event
const handleClick = (e) => {
  if (e.target.innerHTML === "") {
    // sets the innerHTML of the clicked cell to the current player
    e.target.innerHTML = player;
    // calls checkWinner
    checkWinner();
  }
};

// assigns event listeners to the cells
cell0.addEventListener("click", handleClick);
cell1.addEventListener("click", handleClick);
cell2.addEventListener("click", handleClick);
cell3.addEventListener("click", handleClick);
cell4.addEventListener("click", handleClick);
cell5.addEventListener("click", handleClick);
cell6.addEventListener("click", handleClick);
cell7.addEventListener("click", handleClick);
cell8.addEventListener("click", handleClick);
// assigns event listener to the reset button
document.getElementById("reset").addEventListener("click", reset);
