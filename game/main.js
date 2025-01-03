const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper or scissors");
  humanChoice = humanChoice.toLowerCase();
  if (options.includes(humanChoice)) {
    return humanChoice;
  } else {
    alert("Please choose rock, paper or scissors");
    return getHumanChoice();
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

function playGame() {
  for (let i = 0; i < 10; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (humanScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie!");
  }
}

console.log(playGame());