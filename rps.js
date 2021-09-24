const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", () => {
    round("rock");
});
paperBtn.addEventListener("click", () => {
    round("paper");
});
scissorsBtn.addEventListener("click", () => {
    round("scissors");
});



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


function round(playerSelection) {
    let computerSelection = (computerPlay());
    let winCount = 0;

    if ((playerSelection.toLowerCase()) == computerSelection.toLowerCase()) {
        console.log(`You Tie! ${playerSelection} matches ${computerSelection}`);
        return winCount;
    }
    else if ((playerSelection.toLowerCase()) == "rock") {
        if (computerSelection == "Paper") {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return --winCount;
        }
        else if (computerSelection == "Scissors") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return ++winCount;
        }
    }
    else if ((playerSelection.toLowerCase()) == "paper") {
        if (computerSelection == "Rock") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return ++winCount;
        }
        else if (computerSelection == "Scissors") {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return --winCount;
        }
    }
    else if ((playerSelection.toLowerCase()) == "scissors") {
        if (computerSelection == "Rock") {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return --winCount;
        }
        else if (computerSelection == "Paper") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return ++winCount;
        }
    }
    
}


function game() {
    let playerWinCount = 0;
    let compWinCount = 0;
    while (playerWinCount < 5 && compWinCount < 5) {
        let winner = round();

        if (winner > 0) {
            playerWinCount++;
            console.log(`You are ${playerWinCount}/5`);
        } 
        else if (winner < 0) {
            compWinCount++;
            console.log(`The computer is ${compWinCount}/5`);
        }
        
    }
}


