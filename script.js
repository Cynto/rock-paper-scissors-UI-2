let computerScore = 0;
let playerScore = 0;
let round = 0;

//Declaring variables which will be updated during match
const playerScoreText = document.querySelector('#playerScore');
const computerScoreText = document.querySelector('#computerScore');

//Buttons which event listners will be added to
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');


function computerPlay() { //Function randomly returns rock, paper or scissors
    let computerOptions = ["Rock", "Paper", "Scissors"];

    let computerChosen = computerOptions[Math.floor(Math.random()*computerOptions.length)] //randomly picks an element from the array
    return computerChosen;

}
function playRound(computerSelection, playerSelection) { //This function checks whether the player or computer had the winning move
    playerSelection = playerSelection.toLowerCase(); //changes player's input to lowercase, so it doesn't matter whether or not the player entered a lower or higher case word
    console.log(`You chose ${playerSelection}.`)
    console.log(`The computer chose ${computerSelection}.`);
    
    if(computerSelection == "rock" && playerSelection == "paper" ||
        computerSelection == "scissors" && playerSelection == "rock" ||
        computerSelection == "paper" && playerSelection == "scissors") { 
        return "win" 
    }
    else if(computerSelection == playerSelection){ 
        return "tie"
    }
    else {
        return "lose"
    }
    
    

}
