function compNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


function computerPlay() {
    let x = (compNum(0,3));
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


function round() {
    let computerSelection = (computerPlay());
    let playerSelection = prompt("Pick one: rock, paper or scissors.");
    let count = 0;

    if ((playerSelection.toLowerCase()) == computerSelection.toLowerCase()) {
        return `You Tie! ${playerSelection} matches ${computerSelection}`
    }
    else if ((playerSelection.toLowerCase()) == "rock") {
        if (computerSelection == "Paper") {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
        else if (computerSelection == "Scissors") {
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
    }
    else if ((playerSelection.toLowerCase()) == "paper") {
        if (computerSelection == "Rock") {
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
        else if (computerSelection == "Scissors") {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
    }
    else if ((playerSelection.toLowerCase()) == "scissors") {
        if (computerSelection == "Rock") {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
        else if (computerSelection == "Paper") {
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
    }
    console.log(count);


}
