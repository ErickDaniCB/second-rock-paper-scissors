function randomNumber02() {
  let random = Math.floor(Math.random() * 3);
  return random;
}

// Loop for testing randomness

// for (let i = 0; i < 10; i++) {
//     console.log(numberToPlay());
// }

function numberToPlay(number = randomNumber02()) {
  let play;
  switch (number) {
    case 0:
      play = "rock";
      break;
    case 1:
      play = "paper";
      break;
    case 2:
      play = "scissors";
      break;
  }
  return play;
}

// function getPlayerChoice() {
//   let choice = prompt("Write your play! (Rock, paper or scissors)");
//   if (choice) {
//     return choice.toLowerCase();
//   }
//   return;
// }

function comparePlays(playerPlay, computerPlay) {
  switch (playerPlay) {
    case "rock":
      switch (computerPlay) {
        case "paper":
          return 0;
          break;
        case "scissors":
          return 1;
          break;
        default:
          return 2;
      }
      break;
    case "paper":
      switch (computerPlay) {
        case "scissors":
          return 0;
          break;
        case "rock":
          return 1;
          break;
        default:
          return 2;
      }
      break;
    case "scissors":
      switch (computerPlay) {
        case "rock":
          return 0;
          break;
        case "paper":
          return 1;
          break;
        default:
          return 2;
      }
      break;
  }
}

function getRoundResult(player) {
  /* returns 0 (lose), 1 (win) or 2 (tie) */
  // let player = getPlayerChoice();
  if (player === "rock" || player === "paper" || player === "scissors") {
    let computer = numberToPlay();
    let roundResult = comparePlays(player, computer);
    return roundResult;
  } else {
    alert("Invalid play. Please try again");
    return;
  }
}

// function logScore(score1, score2) {
//   console.log(`
// 		Score
// 		Player: ${score1}
// 		Computer: ${score2}
// 		`);
// }

function startGame(result) {
  let pScore = 0;
  let cScore = 0;
  // logScore(pScore, cScore);
  // Check scores
  if (pScore !== 3 && cScore !== 3) {
    switch (result) {
      case 0:
        console.log("Computer wins the round!");
        ++cScore;
        break;
      case 1:
        console.log("Player wins the round!");
        ++pScore;
        break;
      case 2:
        console.log("Tie!");
        break;
      default:
        console.log("Canceled");
    }
    // logScore(pScore, cScore);
  }
  if (pScore === 3) {
    console.log(`You Won The Game!`);
  }
  if (cScore === 3) {
    console.log(`Computer Won The Game!`);
  }
}

///////////////////////// UI /////////////////////////

const startGameBtn = document.querySelector(".start");
const roundNum = document.querySelector(".roundNum");
const prompt = document.querySelector(".prompt");
const plays = document.querySelector(".plays");
const player = document.querySelector(".playerScore");
const computer = document.querySelector(".computerScore");
let playerScore = 0;
let computerScore = 0;

function roundCounter() {
  roundNum.textContent++;
}

function createPlayListeners() {
  plays.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target;
    const result = getRoundResult(target.id);
    switch (result) {
      case 0:
        roundCounter();
        computerScore += 1;
        computer.textContent = computerScore;
        prompt.textContent = "Round lost"
        break;
      case 1:
        roundCounter();
        playerScore += 1;
        player.textContent = playerScore;
        prompt.textContent = "You won"
      case 2: 
        prompt.textContent = "Tie!"
    }
  });
}

startGameBtn.addEventListener("click", () => {
  createPlayListeners();
});
