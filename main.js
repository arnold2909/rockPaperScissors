let botChoice;

let playerChoiceNum;

let playerChoice;

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

botChoice = getBotChoice();

playerChoiceNum = prompt("Choose - 1 for Rock, 2 for Paper or 3 for Scissors");

if (Number(playerChoiceNum) == 1) {
  playerChoice = "Rock";
} else if (Number(playerChoiceNum) == 2) {
  playerChoice = "Paper";
} else {
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
} else if (botChoice == "Rock" && playerChoice == "Scissors") {
  console.log(
    "Bot chose - " +
      botChoice +
      " , and the player chose - " +
      playerChoice +
      " !"
  );
  console.log("Bot wins!");
} else if (botChoice == "Paper" && playerChoice == "Rock") {
  console.log(
    "Bot chose - " +
      botChoice +
      " , and the player chose - " +
      playerChoice +
      " !"
  );
  console.log("Bot wins!");
} else if (botChoice == "Scissors" && playerChoice == "Paper") {
  console.log(
    "Bot chose - " +
      botChoice +
      " , and the player chose - " +
      playerChoice +
      " !"
  );
  console.log("Bot wins!");
} else if (botChoice == "Rock" && playerChoice == "Paper") {
  console.log(
    "Bot chose - " +
      botChoice +
      " , and the player chose - " +
      playerChoice +
      " !"
  );
  console.log("Player wins!");
} else if (botChoice == "Scissors" && playerChoice == "Rock") {
  console.log(
    "Bot chose - " +
      botChoice +
      " , and the player chose - " +
      playerChoice +
      " !"
  );
  console.log("Player wins!");
} else if (botChoice == "Paper" && playerChoice == "Scissors") {
  console.log(
    "Bot chose - " +
      botChoice +
      " , and the player chose - " +
      playerChoice +
      " !"
  );
  console.log("Player wins!");
} else {
  console.log("WHat even happened!");
}
