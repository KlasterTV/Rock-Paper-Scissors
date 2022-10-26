
const choices = ["rock", "paper", "scissors"];
let winners = [];


function game() {
for (let i = 1; i <= 5; i++) {
    playRound(i);
}
logWins();

}
function playRound(round) {
    const  playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection , computerSelection , winner, round);
    //console.log(winner)

}
function playerChoice () {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
      input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
      input = prompt(
        "Type Rock, Paper, or Scissors."
      );
      while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
      }
      input = input.toLowerCase();
      check = validateInput(input);
    }
    return input;
  };
  

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}
function validateInput(choice) {
return choices.includes(choice);}
function checkWinner (playerC, compC) {
    if(playerC === compC) {
        return "draw"
    } else if (
        (playerC === "rock" && compC === "scissors") || 
     (playerC === "paper" && compC === "rock" ) ||
      (playerC === "scissors" && compC === "paper")) {
        return "player";
    } else {
        return "Computer"
    }
}
function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}
function logRound(playerChoice , computerChoice , winner, round){
    console.log('Round:' , round);
    console.log('player chose:', playerChoice);
    console.log('comp choice', computerChoice);
    console.log(winner , "won the round");
    console.log('---------------------------');

}

