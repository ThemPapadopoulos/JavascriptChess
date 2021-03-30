//select every pawn on board
const allPawnSelection = document.querySelectorAll(".pieces");
let selectedTileID; //a variable to save selected pawn tileID
let tempMemory; //a variable to save selected pawn
const next = document.querySelector("#next");
const selectedPawn = document.querySelector("#selectedPawn");
let whatToHighlight;

//!variables for selected pawn POSITION X & Y ON BOARD
let getX;
let getY;
let newMovePosition;
let soldierMoveTo;
let soldierMoveTo2;
let knightMoveTo;




const xMovement=['1','2','3','4','5','6','7','8'];
const yMovement=['a','b','c','d','e','f','g','h'];
// selection switch
let indexX = xMovement.indexOf(parseFloat(getX)) +2;

allPawnSelection.forEach(function (pawn) {
  pawn.addEventListener("click", (e) => {
    //basic universal functions
    saveSelectedPawn();
    hideSelection();


    //! get data for selected pawn POSITION X & Y ON BOARD
    getX = selectedTile.innerHTML.slice(1);
    getY = selectedTile.innerHTML.slice(0,1);
    soldierMoveTo2 = getY+xMovement[xMovement.indexOf(getX)+2];
    soldierMoveTo = getY+xMovement[xMovement.indexOf(getX)+1];
    knightMoveTo = yMovement[yMovement.indexOf(getY)+1]+xMovement[xMovement.indexOf(getX)+2];
    knightMoveTo2 = yMovement[yMovement.indexOf(getY)-1]+xMovement[xMovement.indexOf(getX)+2];


    //! highlight available moves on click
if(pawn.classList.contains('fa-chess-pawn')){//soldier highlight move
  if(!soldierMoveTo.innerHTML && !soldierMoveTo2.innerHTML){
    highlight(soldierMoveTo);
    highlight(soldierMoveTo2);
  }else if(!soldierMoveTo.innerHTML){
        highlight(soldierMoveTo);
      }
  }
  else if(pawn.classList.contains('fa-chess-knight')){//knight highlight move
    highlight(knightMoveTo);
    highlight(knightMoveTo2);
  }

   
 

    if (!pawn.classList.contains("selected")) {
      pawn.classList.toggle("selected");
      selectedPawn.innerHTML = pawn.parentElement.innerHTML;
      
      for (let i = 0; i < selectWhitePawns.length; i++) {
        if (!selectWhitePawns[i].classList.contains("selected")) {
          if (!selectWhitePawns[i].classList.contains("unclickable")) {
            selectWhitePawns[i].classList.toggle("unclickable");
          }
        }
      }
    } else if (pawn.classList.contains("selected")) {
      //checkSelectedPawn();
      pawn.classList.toggle("selected");
      selectedPawn.innerHTML = "";
      
      for (let i = 0; i < selectWhitePawns.length; i++) {
        if (!selectWhitePawns[i].classList.contains("selected")) {
          if (selectWhitePawns[i].classList.contains("unclickable")) {
            selectWhitePawns[i].classList.toggle("unclickable");
          }
        }
      }
    }
    
    })

    function saveSelectedPawn() {
      //empty memory variable on each pawn click
      tempMemory = "";
      //first we get position id
      selectedTileID=pawn.parentElement.id;
    // then we asign it to an element
      selectedTile.innerHTML=selectedTileID;
    }
    function hideSelection() {
      // first switch selection view
    if (next.hidden === true) {
      next.hidden = false;
    } else {
      next.hidden = true;
    }}

    
  });



// GLOBAL FUNCTION get id on mouse over tile
document.onmouseover = function (e) {
  info.innerHTML = e.target.id;
};



//!highlight the squares
function highlight(id) {
  id2 =document.querySelector(`#${id}`);
  id2.classList.toggle('highlight');
}