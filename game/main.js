const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function updateScore() {
  document.getElementById('humanScore').textContent = humanScore;
  document.getElementById('computerScore').textContent = computerScore;
}

function handleChoice(humanChoice) {
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);
  document.getElementById('result').textContent = result;
  updateScore();

  if (humanScore + computerScore >= 5) {
    let gameResult;
    if (humanScore > computerScore) {
      gameResult = "Game Over - You win the game!";
    } else if (humanScore < computerScore) {
      gameResult = "Game Over - You lose the game!";
    } else {
      gameResult = "Game Over - It's a tie!";
    }
    document.getElementById('result').textContent = gameResult;
    // Reset scores for new game
    humanScore = 0;
    computerScore = 0;
    setTimeout(() => {
      updateScore();
      document.getElementById('result').textContent = "";
    }, 3000);
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('rockBtn').addEventListener('click', () => handleChoice('rock'));
  document.getElementById('paperBtn').addEventListener('click', () => handleChoice('paper'));
  document.getElementById('scissorsBtn').addEventListener('click', () => handleChoice('scissors'));
});
