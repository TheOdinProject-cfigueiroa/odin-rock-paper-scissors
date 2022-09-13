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

function game(rounds) {
  let result = 0;
  for (let i = 0; i < rounds; i++) {
    result += playRound(
      prompt(`Round ${i + 1}: Rock, Paper or Scissors?`),
      getComputerChoice()
    );
  }
  if (result == 0) {
    alert("Draw");
  } else result > 0 ? alert("Win") : alert("Lose");
}

game(5);
