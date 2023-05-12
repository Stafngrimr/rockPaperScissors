// There's always more than one way to select things..
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.getElementById("scissors"); // this might be considered deprecated

const eid = document.querySelector("#eid");
const pid = document.querySelector("#pid");
const comment = document.querySelector("#comment");
const winner = document.querySelector("#winner");

const reset = document.querySelector("#reset");

reset.addEventListener("click", function() {
    playerHealth = 100;
    pid.textContent = `${playerHealth}%`;
    enemyHealth = 100;
    eid.textContent = `${enemyHealth}%`;
    winner.textContent = "Well, you're here to fight to the death.";
    comment.textContent = "Better make sure it's a good one.";
    pid.style.color = "white";
    eid.style.color = "white";
});


let choice;
playerHealth = 100;
pid.textContent = `${playerHealth}%`;
enemyHealth = 100;
eid.textContent = `${enemyHealth}%`;



rock.addEventListener("click", function() {
    choice = "rock";
    round();
});
paper.addEventListener("click", function() {
    choice = "paper";
    round();
});
scissors.addEventListener("click", function() {
    choice = "scissors";
    round();
});

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
    
function round() {
    let cC = computerChoice();

    if ((choice == "rock" && cC == "rock") || (choice == "scissors" && cC == "scissors") || (choice == "paper" && cC == "paper")) {
        comment.textContent = "That one was a draw. No one loses any health.";
    } else if ((choice == "rock" && cC == "scissors") || (choice == "scissors" && cC == "paper") || (choice == "paper" && cC == "rock")) {
        comment.textContent = `You picked ${choice}, they picked ${cC}, so you Won that round!`;
        enemyHealth -= 20;
        eid.textContent = `${enemyHealth}%`;
    } else if ((choice == "rock" && cC == "paper") || (choice == "scissors" && cC == "rock") || (choice == "paper" && cC == "scissors")) {
        comment.textContent = `You picked ${choice}, they picked ${cC}, so you lost that one.`;
        playerHealth -= 20;
        pid.textContent = `${playerHealth}%`;
    }

    checkHealth();
}

function checkHealth() {
    if (playerHealth === 0) {
        winner.textContent = "And now you're dead. Game Over.";
        pid.style.color = "red";
    } else if (enemyHealth === 0) {
        winner.textContent = "Congratulations! You survived to fight another bad guy.";
        eid.style.color = "red";
    } else {
        winner.textContent = "You're going to have to do better than that if if you want to come out of this alive!";
    }    
}