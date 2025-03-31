let botChoice;
let playerChoiceNum;
let playerChoice;
let playerScore = 0;
let botScore = 0;

const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button");

buttonRock.textContent = "Choose rock !";
buttonPaper.textContent = "Choose paper !";
buttonScissors.textContent = "Choose scissors !";

const buttonsDiv = document.querySelector("#buttonsDiv");

buttonsDiv.appendChild(buttonRock);
buttonsDiv.appendChild(buttonPaper);
buttonsDiv.appendChild(buttonScissors);

const resultsDiv = document.querySelector("#resultsDiv");
const scoreDiv = document.querySelector("#scoreDiv");

scoreDiv.textContent = "Bot - 0 | Player - 0";

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

function playRound(playerChoice, botChoice) {
  if (botChoice === playerChoice) {
    resultsDiv.textContent =
      "Bot chose - " +
      botChoice +
      " , and the player chose - " +
      playerChoice +
      " !\nDraw!";
    playerScore++;
    botScore++;
    scoreDiv.textContent = "Bot - " + botScore + " | Player - " + playerScore;
  } else if (botChoice === "Rock" && playerChoice === "Scissors") {
    resultsDiv.textContent =
      "Bot chose - " +
      botChoice +
      " , and the player chose - " +
      playerChoice +
      " !\nBot wins!";
    botScore++;
    scoreDiv.textContent = "Bot - " + botScore + " | Player - " + playerScore;
  } else if (botChoice === "Paper" && playerChoice === "Rock") {
    resultsDiv.textContent =
      "Bot chose - " +
      botChoice +
      " , and the player chose - " +
      playerChoice +
      " !\nBot wins!";
    botScore++;
    scoreDiv.textContent = "Bot - " + botScore + " | Player - " + playerScore;
  } else if (botChoice === "Scissors" && playerChoice === "Paper") {
    resultsDiv.textContent =
      "Bot chose - " +
      botChoice +
      " , and the player chose - " +
      playerChoice +
      " !\nBot wins!";
    botScore++;
    scoreDiv.textContent = "Bot - " + botScore + " | Player - " + playerScore;
  } else if (botChoice === "Rock" && playerChoice === "Paper") {
    resultsDiv.textContent =
      "Bot chose - " +
      botChoice +
      " , and the player chose - " +
      playerChoice +
      " !\nPlayer wins!";
    playerScore++;
    scoreDiv.textContent = "Bot - " + botScore + " | Player - " + playerScore;
  } else if (botChoice === "Scissors" && playerChoice === "Rock") {
    resultsDiv.textContent =
      "Bot chose - " +
      botChoice +
      " , and the player chose - " +
      playerChoice +
      " !\nPlayer wins!";
    playerScore++;
    scoreDiv.textContent = "Bot - " + botScore + " | Player - " + playerScore;
  } else if (botChoice === "Paper" && playerChoice === "Scissors") {
    resultsDiv.textContent =
      "Bot chose - " +
      botChoice +
      " , and the player chose - " +
      playerChoice +
      " !\nPlayer wins!";
    playerScore++;
    scoreDiv.textContent = "Bot - " + botScore + " | Player - " + playerScore;
  } else {
    resultsDiv.textContent = "WHat even happened!";
  }
}

buttonRock.addEventListener("click", () => {
  if (botScore < 5 && playerScore < 5) {
    playerChoice = "Rock";
    playRound(playerChoice, getBotChoice());
  } else {
    alert("Sorry, game finished !");
  }
});

buttonPaper.addEventListener("click", () => {
  if (botScore < 5 && playerScore < 5) {
    playerChoice = "Paper";
    playRound(playerChoice, getBotChoice());
  } else {
    alert("Sorry, game finished !");
  }
});

buttonScissors.addEventListener("click", () => {
  if (botScore < 5 && playerScore < 5) {
    playerChoice = "Scissors";
    playRound(playerChoice, getBotChoice());
  } else {
    alert("Sorry, game finished !");
  }
});

if (playerScore === 5) {
  alert("Player wins!");
} else if (botScore === 5) {
  alert("Bot wins!");
}
