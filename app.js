const choices = ['rock','paper','scissors'];
let playerScore = 0;
let computerScore = 0;


const game = () => {
  for(let i = 1;i <= 5;i++){
    const computerSelection = getComputerChoice();
    const playerSelection = prompt('enter rock,paper,scissors: ').toLocaleLowerCase();
    console.log('computer chose: ' + computerSelection );
    console.log('you chose chose: ' + playerSelection);
    console.log(playRound(computerSelection,playerSelection));
    console.log('computer score is : ' + computerScore)
    console.log('Your score is : ' + playerScore)
    console.log('-----------------------------')
  }
} 

function getComputerChoice(){
  return choices[Math.floor(Math.random()*choices.length
)]
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
    computerScore++
    return 'Computer won, rock crushes scissors'
    
  }
    else if (playerSelecion ===  'scissors' && computerSelection === 'paper') {
    playerScore++
    return 'You won,scissors cuts paper'
  
  }
    else if (playerSelecion ===  'rock' && computerSelection === 'paper') {
    computerScore++
    return 'Computer won, paper covers rock'
    

  
  }
    else if (playerSelecion ===  'rock' && computerSelection === 'scissors') {
    playerScore++
    return 'You won, rock crushes scissors'
  
  }
    else if (playerSelecion ===  'paper' &&      computerSelection === 'scissors') {
    computerScore++
    return 'Computer won, scissors cuts paper'
    
  
  }
    else if (playerSelecion ===  'paper' && computerSelection === 'rock') {
    playerScore++
    return 'You won,paper covers rock'
  }

}


console.log(game());

const winner = () => {
  if (computerScore > playerScore){
    return 'Computer won the game'
  }else if (computerScore < playerScore){
    return 'You won the game'
  }else {
    return 'It is a draw game. You can play another round with the computer'
  }
}
console.log('---------------------------------------------');
console.log(winner());
console.log('---------------------------------------------');



/*const cats= ['lion','tiger','pussy','leopard','jauguar'];

const upperCats = cats.map(elements => {
  return elements.toUpperCase();
});
console.log(upperCats);

const arr = ['apple', 'banana', 'cereal'];

const upper = arr.map(element => {
  return element.toUpperCase();
});

// 👇️ ['APPLE', 'BANANA', 'CEREAL']
console.log(upper);*/

