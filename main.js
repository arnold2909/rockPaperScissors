let botChoice;

let playerChoiceNum;

let playerChoice;

let playerScore = 0;

let botScore = 0;

function getBotChoice() {
  let numChoice = Math.random();

  if (numChoice <= 0.33333333333333) {
    let choice = "Rock";
    return choice;
  } else if (numChoice <= 0.6666666666666) {
    let choice = "Paper";
    return choice;
  } else {
    let choice = "Scissors";
    return choice;
  }
}

function getPlayerChoice() {
  return prompt("Choose - 1 for Rock, 2 for Paper or 3 for Scissors");
}

function playRound(playerChoiceNum, botChoice) {
  let playerChoice;

  if (Number(playerChoiceNum) == 1) {
    playerChoice = "Rock";
  } else if (Number(playerChoiceNum) == 2) {
    playerChoice = "Paper";
  } else {
    2;
    playerChoice = "Scissors";
  }

  if (botChoice == playerChoice) {
    console.log(
      "Bot chose - " +
        botChoice +
        " , and the player chose - " +
        playerChoice +
        " !"
    );
    console.log("Draw!");
    playerScore++;
    botScore++;
  } else if (botChoice == "Rock" && playerChoice == "Scissors") {
    console.log(
      "Bot chose - " +
        botChoice +
        " , and the player chose - " +
        playerChoice +
        " !"
    );
    console.log("Bot wins!");
    botScore++;
  } else if (botChoice == "Paper" && playerChoice == "Rock") {
    console.log(
      "Bot chose - " +
        botChoice +
        " , and the player chose - " +
        playerChoice +
        " !"
    );
    console.log("Bot wins!");
    botScore++;
  } else if (botChoice == "Scissors" && playerChoice == "Paper") {
    console.log(
      "Bot chose - " +
        botChoice +
        " , and the player chose - " +
        playerChoice +
        " !"
    );
    console.log("Bot wins!");
    botScore++;
  } else if (botChoice == "Rock" && playerChoice == "Paper") {
    console.log(
      "Bot chose - " +
        botChoice +
        " , and the player chose - " +
        playerChoice +
        " !"
    );
    console.log("Player wins!");
    playerScore++;
  } else if (botChoice == "Scissors" && playerChoice == "Rock") {
    console.log(
      "Bot chose - " +
        botChoice +
        " , and the player chose - " +
        playerChoice +
        " !"
    );
    console.log("Player wins!");
    playerScore++;
  } else if (botChoice == "Paper" && playerChoice == "Scissors") {
    console.log(
      "Bot chose - " +
        botChoice +
        " , and the player chose - " +
        playerChoice +
        " !"
    );
    console.log("Player wins!");
    playerScore++;
  } else {
    console.log("WHat even happened!");
  }
}

function playGame() {
  playRound(getPlayerChoice(), getBotChoice());
  playRound(getPlayerChoice(), getBotChoice());
  playRound(getPlayerChoice(), getBotChoice());
  playRound(getPlayerChoice(), getBotChoice());
  playRound(getPlayerChoice(), getBotChoice());
  if (playerScore > botScore) {
    console.log("Player wins the whole damn thing!");
  } else {
    console.log("Computer wins the whole damn thing!");
  }
}

playGame();
