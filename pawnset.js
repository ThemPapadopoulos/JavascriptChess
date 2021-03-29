const king = '<i class="pieces fas fa-chess-king"></i>';
const queen = '<i class="pieces fas fa-chess-queen"></i>';
const bishop = '<i class="pieces fas fa-chess-bishop"></i>';
const knight = '<i class="pieces fas fa-chess-knight"></i>';
const rook = '<i class="pieces fas fa-chess-rook"></i>';
const pawn = '<i class="pieces fas fa-chess-pawn"></i>';

// the back line on array
backLine = [rook, knight, bishop, queen, king, bishop, knight, rook];

tileblock = [];

var divs = document.getElementsByTagName("span");

function setBoardPawns() {
  //black front row set
  for (let i = 0; i < divs.length; i++) {
    if (divs[i].id.indexOf("7") != -1) {
      //!id contains 7(front row of black pawn)
      divs[i].innerHTML = pawn;
      divs[i].firstChild.classList += " black";
    }
  }
  //black back row set
  for (let a = 0; a < divs.length; a++) {
    if (divs[a].id.indexOf("8") != -1) {
      //!id contains 8(back row of black pawn)
      divs[a].innerHTML = backLine[a];
      divs[a].firstChild.classList += " black";
    }
  }

  //white front row set
  for (let o = 0; o < divs.length; o++) {
    if (divs[o].id.includes("2")) {
      //! id contains 2(front row of white pawn)
      divs[o].innerHTML = pawn;
      divs[o].firstChild.classList += " white";
    }
  }

  //white back row set
  a1.innerHTML = backLine[0];
  b1.innerHTML = backLine[1];
  c1.innerHTML = backLine[2];
  d1.innerHTML = backLine[3];
  e1.innerHTML = backLine[4];
  f1.innerHTML = backLine[5];
  g1.innerHTML = backLine[6];
  h1.innerHTML = backLine[7];

  for (let r = 0; r < divs.length; r++) {
    if (divs[r].id.includes("1")) {
      //! id contains 1(back row of white pawn)
      divs[r].firstChild.classList += " white";
    }
  }
}
