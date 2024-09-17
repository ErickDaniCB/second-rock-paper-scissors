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