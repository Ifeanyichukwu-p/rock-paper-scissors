const choices = ['rock','paper','scissors'];


function getComputerChoice(){
  return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(computerSelection,playerSelecion) {
  if (computerSelection ===  'paper' && playerSelecion === 'paper') {
    return 'you tie! You both pikced paper'
  }
    else if (playerSelecion  ===   'rock' && computerSelection  === 'rock') {
    return 'you tie! You both pikced rock'
  }
    else if (playerSelecion ===  'scissors' && computerSelection === 'scissors') {
    return 'you tie! You both pikced scissors'
  }
    else if (playerSelecion ===  'scissors' && computerSelection === 'rock') {
    return 'You lost, rock crushes scissors'
  
  }
    else if (playerSelecion ===  'scissors' && computerSelection === 'paper') {
    return 'You won,scissors cuts paper'
  
  }
    else if (playerSelecion ===  'rock' && computerSelection === 'paper') {
    return 'You lost, paper covers rock'
  
  }
    else if (playerSelecion ===  'rock' && computerSelection === 'scissors') {
    return 'You won, rock crushes scissors'
  
  }
    else if (playerSelecion ===  'paper' &&      computerSelection === 'scissors') {
    return 'You lost, scissors cuts paper'
  
  }
    else if (playerSelecion ===  'paper' && computerSelection === 'rock') {
    return 'You won,paper covers rock'
  
  }

}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log('computer chose: ' + computerSelection);
console.log('you chose chose: ' + playerSelection);
console.log(playRound(playerSelection, computerSelection));
