let cpuScore = 0;
let playerScore = 0;

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  const validInput = ["rock", "paper", "scissors"];
  const playerInput = playerSelection.toLowerCase();
  var getPlayerChoice = validInput.indexOf(playerInput);
  while (getPlayerChoice === -1) {
    let ask = prompt("Opção Inválida, digite novamente!").toLowerCase();
    getPlayerChoice = validInput.indexOf(ask);
  }
  if (getPlayerChoice == computerSelection) {
    return 0;
  } else if (getPlayerChoice == 0) {
    if (computerSelection == 1) {
      return -1;
    }
    return 1;
  } else if (getPlayerChoice == 1) {
    if (computerSelection == 2) {
      return -1;
    }
    return 1;
  } else if (getPlayerChoice == 2) {
    if (computerSelection == 0) {
      return -1;
    }
    return 1;
  }
}

function game(option) {
  let result = 0;
  let display = document.querySelector("#display");
  let player = document.querySelector("#player");
  let cpu = document.querySelector("#cpu");
  result += playRound(option, getComputerChoice());

  if (result == 0) {
    display.innerText = "Result: Draw";
  } else if (result > 0) {
    display.innerText = "Result: Win";
    playerScore++;
    player.innerText = `You: ${playerScore}`
    
  } else {
    display.innerText = "Result: Lose";
    cpu.innerText = `Computer: ${cpuScore}`
    cpuScore++;
  }

  if (playerScore >= 5) {
    display.innerText = "PLAYER WON! Starting new game...";
    playerScore = 0;
    cpuScore = 0;
    player.innerText = `You: ${playerScore}`
    cpu.innerText = `Computer: ${cpuScore}`
  } 
  else if (cpuScore >= 5) {
    display.innerText = "CPU WON! Starting new game...";
    playerScore = 0;
    cpuScore = 0;
    player.innerText = `You: ${playerScore}`
    cpu.innerText = `Computer: ${cpuScore}`
  }
}

let button = document.querySelectorAll("button");

button.forEach((button) => {
  button.addEventListener("click", () => {
    game(button.innerText);
  });
});
