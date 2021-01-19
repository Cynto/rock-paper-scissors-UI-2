let computerScore = 0;
let playerScore = 0;
let round = 1;

//Declaring variables which will be updated during match
const playerScoreText = document.querySelector('#playerScore');
const computerScoreText = document.querySelector('#computerScore');
const roundText = document.querySelector('#round');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');
const container = document.querySelector('#container');
const end = document.querySelector('#end');



//Buttons which event listners will be added to
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resetButton = document.querySelector('#reset')

//Function randomly returns rock, paper or scissors
function computerPlay() { 
    let computerOptions = ["rock", "paper", "scissors"];

    let computerChosen = computerOptions[Math.floor(Math.random()*computerOptions.length)] //randomly picks an element from the array
    return computerChosen;

}
roundText.textContent = `Round: ${round}`;
//function uses 
function playGame(playerSelection, computerSelection) {
    
    
    
    if(round < 5) {
        round++;
        roundText.textContent = `Round: ${round}`; 
        
        computerSelection = computerPlay();
       
        playerChoice.setAttribute('style', 'color: #d1caca')
        computerChoice.setAttribute('style', 'color: #d1caca')
        playerChoice.textContent = `Player choice: ${playerSelection}`;
        computerChoice.textContent = `Computer choice: ${computerSelection}`;
        
        if(computerSelection == 'rock' && playerSelection == 'paper' ||
            computerSelection == 'scissors' && playerSelection == 'rock' ||
            computerSelection == 'paper' && playerSelection == 'scissors') { 
            
                playerScore++;
                
                playerScoreText.textContent = `You: ${playerScore}`;
                computerScoreText.textContent = `Computer: ${computerScore}`;
                playerChoice.setAttribute('style', 'color: red')
                
                

        }
        else if(computerSelection == playerSelection){ 
            computerScore++;
            playerScore++;
            playerScoreText.textContent = `You: ${playerScore}`;
            computerScoreText.textContent = `Computer: ${computerScore}`;
        
            
        }
        else {
            computerScore++;
            playerScoreText.textContent = `You: ${playerScore}`;
            computerScoreText.textContent = `Computer: ${computerScore}`;
            computerChoice.setAttribute('style', 'color: red')
            
    }
    
        
    }
    else {
        if(playerScore > computerScore) {
            playerScoreText.setAttribute('style', 'color: red;');
            
            end.textContent = 'You beat the computer!';
            
        }
        else if(computerScore > playerScore) {
            computerScoreText.setAttribute('style', 'color: red;');
            
            end.textContent = 'You lost!';
            
        }
        else {
            playerScoreText.setAttribute('style', 'color: red;');
            computerScoreText.setAttribute('style', 'color: red;')
            
           
            
            end.textContent = 'It\'s a tie!';
            
        }
        resetButton.style.display = 'block';
        resetButton.textContent = 'Reset';
        
        
        
        //reset button refreshes site 
        resetButton.addEventListener('click', () => {
            window.location.reload(true);
        })

    }
}



//event listener added to buttons
rockButton.addEventListener('click', () => {
    playGame('rock');
});
paperButton.addEventListener('click', () => {
    playGame('paper');
});
scissorsButton.addEventListener('click', () => {
    playGame('scissors');
});




