function getComputerNum() {
    return Math.floor(Math.random() *3)
}

function computerPlay() {
    const compChoice = ["Rock","Paper","Scissors"];
    return compChoice[getComputerNum()]
}

function getPlayerSelect() {
    return prompt("Rock/Paper/Scissors?")
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

function game() {
    let playerRecord = 0;
    for( let i = 0; i < 5; i++){
        if(playGame(getPlayerSelect(),computerPlay()) ==="You Win!"){
            playerRecord++;
        }
    console.log("You have won " + playerRecord + " times!");
    }
}

game()