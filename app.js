const tieDisplay =  document.createElement('h2');
const headingDisplay = document.createElement('h1');
const userChoiceDisplay = document.createElement('h2');
const userScoreDisplay = document.createElement('h2');
const computerChoiceDisplay = document.createElement('h2');
const computerScoreDisplay = document.createElement('h2');
const resultDisplay = document.createElement('h2');
const RoundResultDisplay = document.createElement('h2');
const gameGrid = document.getElementById('game-grid');
gameGrid.append(headingDisplay,tieDisplay,userChoiceDisplay,userScoreDisplay,computerChoiceDisplay,computerScoreDisplay,RoundResultDisplay,resultDisplay);
let user = 0;
let computer = 0;
let tie = 0;

headingDisplay.textContent = 'ROCK-PAPER-SCISSORS GAME';
headingDisplay.style.color = 'yellow';

//array of choices for user to play from.
const choices = ['Rock','Paper','Scissors']
let userChoice;
let computerChoice;


const handleClick = (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.textContent = 'You chose: ' + userChoice;
  generateComputerChoice();
  const winner = getResult(userChoice,computerChoice);
  showWinner(winner, computerChoice);
  console.log(user,computer,tie);
  getFinalResult(user,computer);
}


const generateComputerChoice = () => {
  computerChoice = choices[Math.floor(Math.random()*choices.length)]
  computerChoiceDisplay.textContent = 'Computer chose: ' + computerChoice;
  return computerChoice;
}

const choicesButton = document.createElement('div');
choicesButton.id = 'choice-button'

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button');
  button.id = choices[i];
  button.textContent = choices[i];
  button.addEventListener('click',handleClick);
  choicesButton.appendChild(button)
}

gameGrid.appendChild(choicesButton);

const resetButton = document.createElement('button');
resetButton.classList.add('reset');
resetButton.textContent = 'Play again?';
gameGrid.appendChild(resetButton);

function getResult() {
  switch(userChoice + computerChoice) {
    case 'RockScissors':
    case 'ScissorsPaper':
    case 'PaperRock':
      return 'user';
      break;
    case 'ScissorsRock':
    case 'PaperScissors':
    case 'RockPaper':
      return 'computer';
      break;
    case 'ScissorsScissors':
    case 'PaperPaper':
    case 'RockRock':
      return 'tie';
      break;
    
  }
}


function showWinner(winner, computerChoice) {
  if (winner === 'user') {
    // Inc player score
    user++;
    RoundResultDisplay.textContent = 'You won'
    userScoreDisplay.textContent = `Your score is:  ${user}`;
  } else if (winner === 'computer') {
    // Inc computer score
    computer++;
    computerScoreDisplay.textContent = 'Computer score is:' +  computer;
    RoundResultDisplay.textContent = 'You lost'
  } else {
    tie++
    tieDisplay.textContent = `Total number of tie is: ${tie}`
    RoundResultDisplay.textContent = 'Tie';
  }

  
}

function getFinalResult() {
  
  if (user == 5) {
    resultDisplay.textContent = 'Final result: You Won 5 Games, Congrats!';
    resetButton.style.display = "flex";
    choicesButton.style.display = 'none';
  } else if (computer == 5){
    resultDisplay.textContent = 'Final result: Sorry, the computer won 5 times';
    resetButton.style.display = "flex";
    choicesButton.style.display = 'none';
  }
  
  
  }

  function resetGame() {
    user = 0;
    computer = 0;
    tie = 0;
    userScoreDisplay.textContent = '';
    computerScoreDisplay.textContent = '';
    tieDisplay.textContent = '';
    RoundResultDisplay.textContent = '';
    resultDisplay.textContent = '';
    choicesButton.style.display = 'flex';
    userChoiceDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';
    resetButton.style.display = 'none';

  }

  resetButton.addEventListener('click',resetGame);
