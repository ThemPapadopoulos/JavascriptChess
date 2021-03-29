//select every pawn on board
const allPawnSelection = document.querySelectorAll(".pieces");

let tempMemory; //a variable to save selected pawn
const next = document.querySelector("#next");
const selectedPawn = document.querySelector("#selectedPawn");

// selection switch

allPawnSelection.forEach(function (pawn) {
  pawn.addEventListener("click", (e) => {
    //empty memory variable on each pawn click
    tempMemory = "";

    // first switch selection view
    if (next.hidden === true) {
      next.hidden = false;
    } else {
      next.hidden = true;
    }

    if (!pawn.classList.contains("selected")) {
      pawn.classList.toggle("selected");
      selectedPawn.innerHTML = pawn.parentElement.innerHTML;
      rest = document.querySelectorAll(".pieces");
      for (let i = 0; i < rest.length; i++) {
        if (!rest[i].classList.contains("selected")) {
          if (!rest[i].classList.contains("unclickable")) {
            rest[i].classList.toggle("unclickable");
          }
        }
      }
    } else if (pawn.classList.contains("selected")) {
      pawn.classList.toggle("selected");
      selectedPawn.innerHTML = "";
      rest = document.querySelectorAll(".pieces");
      for (let i = 0; i < rest.length; i++) {
        if (!rest[i].classList.contains("selected")) {
          if (rest[i].classList.contains("unclickable")) {
            rest[i].classList.toggle("unclickable");
          }
        }
      }
    }
  });
});

// GLOBAL FUNCTION get id on mouse over tile
document.onmouseover = function (e) {
  info.innerHTML = e.target.id;
};
