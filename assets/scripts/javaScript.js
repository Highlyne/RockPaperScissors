// 1. Set up all variables
// ====================================
console.log("hello");



// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var draw = 0;

// Create variables to grab and update the scores
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("comp-score");
var result_div = document.getElementById("results");

// Create variables to watch for the user's choice
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissor_div = document.getElementById('scissor');

// 2. Make functions to operate the Game
// ======================================
// Get computer's  choice-  use Math.Floor to round random numbers down to the nearest whole number. use Math.Random to populate a random number between 0 and 3
function makeComputerChoice() {
  // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
  const computerChoice = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random()*3);
  return computerChoice[randomNumber];
}

function win(user, computer) {
  wins++;
  userScore_span.innerHTML= wins;
  result_div.innerHTML= `${user.toUpperCase()} beats ${computer.toUpperCase()}.  You Win!`;
  document.getElementById(user).classList.add('green-glow');
  setTimeout(()=> document.getElementById(user).classList.remove('green-glow'), 300);
}

function lose(user, computer) {
  losses++;
  computerScore_span.innerHTML = losses;
  result_div.innerHTML= `${computer.toUpperCase()} beats ${user.toUpperCase()}.  You Lose!`;
}

function ties() {
  result_div.innerHTML= "Great minds think alike.  Let's play again.";
}

function game(userChoice) {
  const computerPick = makeComputerChoice();
  switch (userChoice + computerPick) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
    win(userChoice, computerPick);
    break;

    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
    console.log("You Lose " + userChoice + computerPick);
    lose(userChoice, computerPick);
    break;

    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
    console.log("We Tie " + userChoice + computerPick);
    ties();
    break;
  }
};
 


function main() {
// +++ Pull in the user's selection +++
// send the letter r for the user's choice if they click on the rock picture
rock_div.addEventListener("click", () => game("rock"));
// send the letter p for the user's choice if they click on the paper picture
paper_div.addEventListener("click", () => game("paper"));
// send the letter s for the user's choice if they click on the scissor picture
scissor_div.addEventListener("click", () => game("scissor"));
}

main();
makeComputerChoice();