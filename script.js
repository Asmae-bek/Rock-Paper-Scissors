function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 1 / 3) 
    return "rock";
  else if (randomNumber < 2 / 3) 
    return "paper";
  return "scissors"
}
function getHumanChoice() {
  return prompt("Choose one : rock, paper, or scissors");
}
function playRound(humanChoice = humanChoice.toLowerCase(), computerChoice = computerChoice.toLowerCase()) {
  if (humanChoice == computerChoice)
    console.log("Tie");
  else if ((humanChoice == "rock" && computerChoice == "scissors")
    || (humanChoice == "scissors" && computerChoice == "paper")
    || (humanChoice == "paper" && computerChoice == "rock")) {
    humanScore++;
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
  }
}
function playGame() {
  let i = 5;
  while (i--) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) 
    console.log("The winner is you");
  else if (humanScore < computerScore)
    console.log("The winner is the computer");
  else 
    console.log("It's a tie");
  humanScore = 0, computerScore = 0;
}
let humanScore = 0, computerScore = 0;
playGame();