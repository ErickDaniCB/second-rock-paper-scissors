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

function getPlayerChoice() {
  let choice = prompt("Write your play! (Rock, paper or scissors)");
  // console.log(choice.toLowerCase());
  return choice.toLowerCase();
}

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

function gameFlow() {
  let player = getPlayerChoice();

  if (player === "rock" || player === "paper" || player === "scissors") {
    let computer = numberToPlay();
    // Call a function that compares player and computer.
  } else {
    alert("Invalid play. Please try again");
  }
}
