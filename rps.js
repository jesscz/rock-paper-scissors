function compNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function computerPlay() {
    x = (compNum(0,3));
    let compTurn;
    if (x == 0) {
        compTurn = "Rock";
    }
    else if (x == 1) {
        compTurn = "Paper";
    }
    else {
        compTurn = "Scissors"
    }
    return compTurn;
}
