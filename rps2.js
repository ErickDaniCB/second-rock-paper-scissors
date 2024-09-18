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
  if (choice) {
    return choice.toLowerCase();
  }
  return;
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

function getRoundResult() {
  /* returns 0 (lose), 1 (win) or 2 (tie) */
  let player = getPlayerChoice();
  if (player === "rock" || player === "paper" || player === "scissors") {
    let computer = numberToPlay();
    let roundResult = comparePlays(player, computer);
    return roundResult;
  } else {
    alert("Invalid play. Please try again");
    return;
  }
}

function logScore(score1, score2) {
	console.log(`
		Score 
		Player: ${score1}
		Computer: ${score2}
		`)
}

function startGame() {
  let pScore = 0;
  let cScore = 0;
	logScore(pScore, cScore);
  // Check scores
	while (pScore !== 3 && cScore !== 3) {
		let result = getRoundResult();
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
		logScore(pScore, cScore);
	}
	if(pScore === 3){
		console.log(`You Won The Game!`);
	}
	if (cScore === 3) {
		console.log(`Computer Won The Game!`);
	}
}
