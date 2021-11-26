const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const answers = document.getElementById("answers");
const response = document.getElementById("response");
const cScore = document.getElementById("compScore");
const pScore = document.getElementById("playerScore");
const final = document.getElementById("final");
const textContainer = document.getElementById("textContainer");

const playerScore = document.createElement("div");
const compScore = document.createElement("div");

const finalTextComp = document.createElement("div");
finalTextComp.textContent = "The final winner is the computer.";
const finalTextPlayer = document.createElement("div");
finalTextPlayer.textContent = "You are the final winner!"

const winnerContent = document.createElement("div");
const resetBtn = document.createElement("button");
resetBtn.innerHTML = "Play Again"

let compWinCount = 0;
let playerWinCount = 0;
let newline = "\r\n";

rockBtn.addEventListener("click", () => {
    round("rock");
    game();
});
paperBtn.addEventListener("click", () => {
    round("paper");
    game();
});
scissorsBtn.addEventListener("click", () => {
    round("scissors");
    game();
});

resetBtn.addEventListener("click", () => {
    reset();
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

    if ((playerSelection) == computerSelection.toLowerCase()) {
        winnerContent.textContent = "You tie with the computer!"
        response.appendChild(winnerContent);
        return winCount;
    }

    else if ((playerSelection) == "rock") {
        if (computerSelection == "Paper") {
            winnerContent.textContent = "You lose! Paper beats Rock"
            response.appendChild(winnerContent);
            return --winCount;
        }
        else if (computerSelection == "Scissors") {
            winnerContent.textContent = "You win! Rock beats Scissors"
            response.appendChild(winnerContent);
            return ++winCount;
        }
    }
    else if ((playerSelection) == "paper") {
        if (computerSelection == "Rock") {
            winnerContent.textContent = "You win! Paper beats Rock"
            response.appendChild(winnerContent);
            return ++winCount;
        }
        else if (computerSelection == "Scissors") {
            winnerContent.textContent = "You lose! Scissors beats Paper"
            response.appendChild(winnerContent);
            return --winCount;
        }
    }
    else if ((playerSelection) == "scissors") {
        if (computerSelection == "Rock") {
            winnerContent.textContent = "You lose! Rock beats Scissors"
            response.appendChild(winnerContent);
            return --winCount;
        }
        else if (computerSelection == "Paper") {
            winnerContent.textContent = "You win! Scissors beats Paper"
            response.appendChild(winnerContent);
            return ++winCount;
        }
    }
    
}


function game() {  
    answers.onclick = function(event) {
        const winner = round(event.target.id);
        if ((playerWinCount <= 4) && (compWinCount <= 4)) {
            if (winner > 0) {
                playerWinCount++;
                playerScore.textContent = "Your score: " + newline + playerWinCount + "/5"
                compScore.textContent = "The computer's score: " + newline + compWinCount + "/5"
                pScore.appendChild(playerScore);
                cScore.appendChild(compScore);
                if (compWinCount == 5) {
                    final.appendChild(finalTextComp);
                    diableBtns();
                    textContainer.appendChild(resetBtn);
                }
                else if (playerWinCount == 5) {
                    final.appendChild(finalTextPlayer);
                    diableBtns();
                    textContainer.appendChild(resetBtn);
                }
            } 
            else if (winner < 0) {
                compWinCount++;
                playerScore.textContent = "Your score: " + newline + playerWinCount + "/5"
                compScore.textContent = "The computer's score: " + newline + compWinCount + "/5"
                pScore.appendChild(playerScore);
                cScore.appendChild(compScore);
                if (compWinCount == 5) {
                    final.appendChild(finalTextComp);
                    diableBtns();
                    textContainer.appendChild(resetBtn);
                }
                else if (playerWinCount == 5) {
                    final.appendChild(finalTextPlayer);
                    diableBtns();
                    textContainer.appendChild(resetBtn);
                }
            }
        }    
    };
}

function reset() {
    location.reload();
}

function diableBtns() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}