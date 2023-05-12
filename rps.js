// There's always more than one way to select things..
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.getElementById("scissors"); // this might be considered deprecated

let choice;
playerScore = 0;
computerScore = 0;

rock.addEventListener("click", function() {
    choice = "rock";
    console.log("You picked Rock");
    round();
});
paper.addEventListener("click", function() {
    choice = "paper";
    console.log("You picked Paper");
    round();
});
scissors.addEventListener("click", function() {
    choice = "scissors";
    console.log("You picked Scissors");
    round();
});

function computerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number == 0) {
        console.log("Computer picked Rock");
        return "rock";
    } else if (number == 1) {
        console.log("Computer picked Paper");
        return "paper";
    } else {
        console.log("Computer picked Scissors");s
        return "scissors";
    }
}
    
function round() {
    let cC = computerChoice();

    if ((choice == "rock" && cC == "rock") || (choice == "scissors" && cC == "scissors") || (choice == "paper" && cC == "paper")) {
        console.log("It's a draw!");
    } else if ((choice == "rock" && cC == "scissors") || (choice == "scissors" && cC == "paper") || (choice == "paper" && cC == "rock")) {
        console.log("You won that round!");
        playerScore++;
    } else if ((choice == "rock" && cC == "paper") || (choice == "scissors" && cC == "rock") || (choice == "paper" && cC == "scissors")) {
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