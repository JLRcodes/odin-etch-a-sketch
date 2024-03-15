let color = "black";

//DOMContentLoaded - Loads the html/css before the javascript
document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);

  let btn_popup = document.querySelector("#popup");
  btn_popup.addEventListener("click", function () {
    let size = getSize();
    createBoard(size);
  });
});

function createBoard(size) {
  let board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    //div.style.backgroundColor = "yellow";
    div.addEventListener("mouseover", colorDiv());
    board.insertAdjacentElement("beforeend", div);
  }
}

function getSize() {
  let input = prompt("What size board would you like?");
  let message = document.querySelector("#message");
  if (input == "") {
    message.innerHTML = "Please provide a number";
  } else if (input > 100 || input <= 0) {
    message.innerHTML = "Provide a number between 1 & 100";
  } else {
    message.innerHTML = "Success, Now you can play!";
    return input;
  }
}

function colorDiv() {}

function setColor(colorChoice) {
  let color = colorChoice;
}
