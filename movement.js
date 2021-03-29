const selectWhitePawns = document.getElementsByClassName("white");
const selectBlackPawns = document.getElementsByClassName("black");

canMove();

function canMove() {
  //! IN THE BEGINNING - make black unclickable
  for (i = 0; i < selectBlackPawns.length; i++) {
    selectBlackPawns[i].classList.toggle("unclickable");
  }
}
