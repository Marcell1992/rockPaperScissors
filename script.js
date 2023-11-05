

let playerScore = 0;
let computerScore = 0;

let playerOption = document.getElementsByTagName("img")
    for (let i = 0; i < 3; i++){
      playerOption[i].addEventListener('click', game, false);
    }

const newGame = document.getElementById('newGame');
newGame.addEventListener('click', clearBoard);

 function clearBoard(){
  dialog.textContent = 'New game. New you';
  playerScore = 0;
  document.querySelector('.score-player').textContent = playerScore;
  computerScore = 0;
  document.querySelector('.score-PC').textContent = computerScore;
 }

const PCpaper = document.querySelector('#PCpaper');
const PCrock = document.querySelector('#PCrock');
const PCscissors = document.querySelector('#PCscissors');

const dialog = document.querySelector('.dialog');

function game(){
    let randomChoice = Math.floor(Math.random() *3)+1;
    
    if(this.id == 'PLrock' && playerScore < 5 && computerScore < 5){
      playerSelection = 'rock';
    }else if(this.id == 'PLscissors' && playerScore < 5 && computerScore < 5){
      playerSelection = 'scissors';
    }else if (this.id == 'PLpaper' && playerScore < 5 && computerScore < 5){
      playerSelection = 'paper';
    }else{
      return;
    }
    
    const computerSelection = getComputerChoice(randomChoice);
    playRound(playerSelection, computerSelection);

    function getComputerChoice(randomChoice){ // return pictures visually
        if(randomChoice == 1){
          PCrock.classList.remove('stylingPC');
          PCscissors.classList.remove('stylingPC');
          PCpaper.classList.add('stylingPC');
          return 'paper';
        }else if (randomChoice == 2){
          PCscissors.classList.remove('stylingPC');
          PCpaper.classList.remove('stylingPC');
          PCrock.classList.add('stylingPC');
          return 'rock';
        }else{
          PCrock.classList.remove('stylingPC');
          PCpaper.classList.remove('stylingPC');
          PCscissors.classList.add('stylingPC');
          return 'scissors';
        }
    }


    function playRound(playerSelection, computerSelection){
        if (playerSelection == computerSelection){
            dialog.textContent = "Round draw! No score for either.";

        }else if (playerSelection == 'rock' && computerSelection == 'paper' ||
                  playerSelection == 'paper' && computerSelection == 'scissors' ||
                  playerSelection == 'scissors' && computerSelection == 'rock'){
            
            computerScore +=1
            document.querySelector('.score-PC').textContent = computerScore;
            dialog.textContent = `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()} beats
                                  ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}. You lose that one!`;

        }else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
                  playerSelection == 'paper' && computerSelection == 'rock' ||
                  playerSelection == 'scissors' && computerSelection == 'paper'){
            
            playerScore +=1
            document.querySelector('.score-player').textContent = playerScore;
            dialog.textContent = `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats
                                  ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()}. Round win!`;
        }
    }

  if (playerScore < 5 && computerScore < 5){
        newGame.disabled = true;
  }else if (playerScore == 5){
        dialog.textContent = 'Congratulations! You win! Hit the "New Game" button and see if you can get a hot streak';
        newGame.disabled = false;
  }else if (computerScore == 5){
        dialog.textContent = 'Congratulations! Er, I mean. My condolences, you lost. Better luck next time';
        newGame.disabled = false;
  }
}