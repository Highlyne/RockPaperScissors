// 1. Set up all variables
// ====================================
console.log("hello");

// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var ties = 0;

// Create variables to grab and update the scores
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("comp-score");

// Create variables to watch for the user's choice
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

// 2. Make functions to operate the Game
// ======================================

function game(userChoice) {
  console.log("Here is the user's pick " + userChoice);
};
 


function main() {
// +++ Pull in the user's selection +++
// send the letter r for the user's choice if they click on the rock picture
rock_div.addEventListener("click", function() {
  game("r");
})
// send the letter p for the user's choice if they click on the paper picture
paper_div.addEventListener("click", function() {
  game("p");
})
// send the letter s for the user's choice if they click on the scissor picture
scissor_div.addEventListener("click", function() {
  game("s");
})
}

main();