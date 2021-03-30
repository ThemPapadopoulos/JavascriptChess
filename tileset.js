const board = document.querySelector(".board");

let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
let numbers = ["8", "7", "6", "5", "4", "3", "2", "1"];

//! set 64 board tiles with unique id's

for (number in numbers) {
  createBoardTiles(number);
}

function createBoardTiles(number) {
  for (let i = 0; i < 8; i++) {
    let block = document.createElement("span");
    block.id = letters[i] + numbers[number];
    block.className = "block";
    board.appendChild(block);
  }
}

//---------functions taken  from pawnset.js---------

setBoardPawns(); //set initial pawns


//!tests with pawn plasement here
//a4.innerHTML=soldier;


checkOccupiedBlocks(); // check populated(=with pawn on them) tiles