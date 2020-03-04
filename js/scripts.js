function getComputerNum() {
    return Math.floor(Math.random() *3)
}

function computerPlay() {
    const compChoice = ["Rock","Paper","Scissors"];
    return compChoice[getComputerNum()]
}

function playGame(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case "rock":
            if(computerSelection.toLowerCase() === "paper") {
                return "You Lose!"
            }
            else if (computerSelection.toLowerCase() === "scissors"){
                return "You Win!"
            }
            else {
                return "It's a tie."
            }
        case "paper":
            if(computerSelection.toLowerCase() === "scissors") {
                return "You Lose!"
            }
            else if (computerSelection.toLowerCase() === "rock"){
                return "You Win!"
            }
            else {
                return "It's a tie."
            }
        case "scissors":
            if(computerSelection.toLowerCase() === "rock") {
                return "You Lose!"
            }
            else if (computerSelection.toLowerCase() === "paper"){
                return "You Win!"
            }
            else {
                return "It's a tie."
            }
    }
}

console.log(playGame(computerPlay(),computerPlay()))