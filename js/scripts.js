function getComputerNum() {
    return Math.floor(Math.random() *3)
}

function computerPlay() {
    const compChoice = ["Rock","Paper","Scissors"];
    return compChoice[getComputerNum()]
}

function displayEnemy(computerSelection) {
	const enemyRecord = document.getElementById("enemy");
	enemyRecord.textContent= `Your enemy played ${computerSelection}!`;
}


function userSelectInput(return_id) {
	return(return_id.id)
}


function playGame(playerSelection, computerSelection) {
	displayEnemy(computerSelection);
	console.log(playerSelection);
	console.log(computerSelection);
    switch (playerSelection) {
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

function displayRecord(record) {
	const divRecord = document.getElementById("result");
	divRecord.textContent= `You have won ${record} times!`;
}


function game() {
        let playerRecord = 0;
	const buttons = document.querySelectorAll('button');
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			if(playGame(userSelectInput(button),computerPlay()) ==="You Win!"){
				playerRecord++;
        	};
    	displayRecord(playerRecord);
})
})
}
game()
// TODO 
// 1)Implement best out of 5
// 2)When a winner is determined change the screen to get rid of the buttons and display the winner and loser 
// message
// 3)Style everything
// 4) Running score throughout the game

//function game() {
//    let playerRecord = 0;
//    for( let i = 0; i < 5; i++){
//        if(playGame(getPlayerSelect(),computerPlay()) ==="You Win!"){
//            playerRecord++;
//        }
//    console.log("You have won " + playerRecord + " times!");
//    }
//}
//game())
//

