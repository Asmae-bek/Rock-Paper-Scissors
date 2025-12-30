function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 1 / 3) 
    return "rock";
  else if (randomNumber < 2 / 3) 
    return "paper";
  return "scissors"
}
function getHumanChoice(e) {
  return e.target.textContent;
}
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  let div = document.querySelector("div");
  if (humanChoice == computerChoice)
    div.textContent = `Tie score : ${humanScore}-${computerScore}`;
  else if ((humanChoice == "rock" && computerChoice == "scissors")
    || (humanChoice == "scissors" && computerChoice == "paper")
    || (humanChoice == "paper" && computerChoice == "rock")) {
    humanScore++;
    div.textContent = `You won! ${humanChoice} beats ${computerChoice} score : ${humanScore}-${computerScore}`;
  } else {
    computerScore++;
    div.textContent = `You lost! ${computerChoice} beats ${humanChoice} score : ${humanScore}-${computerScore}`;
  }
  if (humanScore == 5) {
    div.textContent = `The winner is you score : ${humanScore}-${computerScore}`;
    humanScore = 0, computerScore = 0;
  }
  else if (computerScore == 5) {
    div.textContent = `The winner is the computer score : ${humanScore}-${computerScore}`;
    humanScore = 0, computerScore = 0;
  } 
}
let humanScore = 0, computerScore = 0;
let choice = document.querySelector("ul");
choice.addEventListener("click", (e) => {playRound(getHumanChoice(e), getComputerChoice())});