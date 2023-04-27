// Rock Paper Scissors game
/* This is also a comment */

console.log("Welcome to RPS");

function capitalise(s) {
    let first = s[0].toUpperCase();
    s = s.replace(/^[a-zA-Z]/i, first);
    return s;
  }

function computerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number == 0) {
        return "rock";
    } else if (number == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playerChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    choice = choice.toLowerCase();
    if (choice == "rock") {
        return "rock";
    } else if (choice == "paper") {
        return "paper";
    } else if (choice == "scissors") {
        return "scissors"
    } else {
        console.log("That's not how the game works. Start over.")
        throw "";
    }
}


    
function round() {
    let pC = playerChoice();
    let cC = computerChoice();

    if ((pC == "rock" && cC == "rock") || (pC == "scissors" && cC == "scissors") || (pC == "paper" && cC == "paper")) {
        console.log("It's a draw!");
    } else if ((pC == "rock" && cC == "scissors") || (pC == "scissors" && cC == "paper") || (pC == "paper" && cC == "rock")) {
        return 0;
    } else if ((pC == "rock" && cC == "paper") || (pC == "scissors" && cC == "rock") || (pC == "paper" && cC == "scissors")) {
        return 1;
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let winner = round();

        if (winner == 0) {
            console.log("You Win!");
            playerScore++;
        } else if (winner == 1) {
            console.log("Oh mate, you lost!");
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`The Game goes to you! ${playerScore} to ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`The Computer beat you, ${computerScore} to ${playerScore}`);
    } else {
        console.log("Well, that's a draw!");
    }
}

game();

