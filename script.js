/* rock, paper, scissors, lizard, spock:
scissors cuts paper
paper covers rock
rock crushes lizard
lizard poisons spock
spock smashes scissors
scissors decapitates lizard
lizard eats paper
paper disproves spock
spock vaporizes rock
and as it always has, rock crushes scissors
*/

let playerScore = 0;
let computerScore = 0;

function game(){
    let randomNumber = Math.floor(Math.random() *3)+1;
    const playerSelection = prompt("Rock, paper or scissors?",'');
    const computerSelection = getComputerChoice(randomNumber);
    console.log(`Computer's choice is: ${computerSelection}`);
    playRound(playerSelection, computerSelection);
    console.log(`Your score is: ${playerScore}. The computer's score is: ${computerScore}`);
    console.log('');

    function getComputerChoice(randomNumber){
        if(randomNumber == 1){
          return 'Paper';
        }else if (randomNumber == 2){
          return 'Rock';
        }else{
          return 'Scissors';
        }
    }

    function playRound(playerSelection, computerSelection){
        if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
            console.log("That's a draw. No score for either");

        }else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper' ||
                  playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors' ||
                  playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock'){
            
            computerScore += 1;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            
        }else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors' ||
                  playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock' ||
                  playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper'){
            
            playerScore += 1;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);

        }else{
            alert("This is a game of rock, paper, scissors");
            console.log('');
            game();
        }
    }
}

game();
game();
game();
game();
game();
if (playerScore > computerScore){
    console.log("You are the winner of the match!");
}else if (computerScore > playerScore){
    console.log("You lost that one! Better luck next time");
}else{
    console.log("How did this happen? It's a draw");
}