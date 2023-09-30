/* rock, paper, scissors, lizard, spock
rock crushes lizard
lizard poisons spock
spock smashes scissors
scissors cuts lizard
lizard eats paper
paper disproves spock
spock vaporizes rock
*/

function getComputerChoice(randomNumber){
    if(randomNumber == 1){
      return answer = 'Paper';
    }else if (randomNumber == 2){
      return answer = 'Rock';
    }else{
      return answer = 'Scissor';
    }
}
let randomNumber = Math.floor(Math.random() *3)+1;
const playerSelection = prompt("Rock, paper or scissors?",'');
const computerSelection = getComputerChoice(randomNumber);
console.log(computerSelection);

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        console.log('Round draw');
        
    }else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper' ||
              playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors' ||
              playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock'){
        
        console.log("You lost");

    }else{
        console.log("You win!");
    }
}
playRound(playerSelection, computerSelection);