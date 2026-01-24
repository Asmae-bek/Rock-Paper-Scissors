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
  if (humanChoice == computerChoice) {
    div.textContent = "Tie";
    h.textContent = `Your score : ${humanScore}`;
    c.textContent = `Computer score : ${computerScore}`;
  }
  else if ((humanChoice == "rock" && computerChoice == "scissors")
    || (humanChoice == "scissors" && computerChoice == "paper")
    || (humanChoice == "paper" && computerChoice == "rock")) {
    humanScore++;
    div.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
    h.textContent = `Your score : ${humanScore}`;
    c.textContent = `Computer score : ${computerScore}`;
  } else {
    computerScore++;
    div.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
    h.textContent = `Your score : ${humanScore}`;
    c.textContent = `Computer score : ${computerScore}`;
  }
  if (humanScore == 5) {
    div.textContent = "Game over! You win ⸜( ˃ ᵕ ˂)⸝♡";
    h.textContent = `Your score : ${humanScore}`;
    c.textContent = `Computer score : ${computerScore}`;
    choice.querySelectorAll("button").forEach(btn => btn.disabled = true);
  }
  else if (computerScore == 5) {
    div.textContent = "Game over! Computer wins ( • ᴖ • )";
    h.textContent = `Your score : ${humanScore}`;
    c.textContent = `Computer score : ${computerScore}`;
    choice.querySelectorAll("button").forEach(btn => btn.disabled = true);
  } 
}
function restart() {
  humanScore = 0;
  computerScore = 0;
  h.textContent = "Your score : 0";
  c.textContent = "Computer score : 0";
  div.textContent = "";
  choice.querySelectorAll("button").forEach(btn => btn.disabled = false);
}
let humanScore = 0, computerScore = 0;
let choice = document.querySelector("ul");
let div = document.querySelector(".result");
let h = document.querySelector(".human");
let c = document.querySelector(".computer");
const restartBtn = document.querySelector("#restart");
choice.addEventListener("click", (e) => {playRound(getHumanChoice(e), getComputerChoice())});
restartBtn.addEventListener("click", restart);