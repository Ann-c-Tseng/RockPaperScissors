let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const ind = Math.floor(Math.random() * 3);
  return choices[ind];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  const smallUserWord = "User".fontsize(3).sup();
  const smallCompWord = "Computer".fontsize(3).sup();
  const userChoice_div = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}! You WIN!`;

  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(user, computer) {
  const smallUserWord = "User".fontsize(3).sup();
  const smallCompWord = "Computer".fontsize(3).sup();
  const userChoice_div = document.getElementById(user);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallCompWord}! You LOST!`;

  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(user, computer) {
  const smallUserWord = "User".fontsize(3).sup();
  const smallCompWord = "Computer".fontsize(3).sup();
  const userChoice_div = document.getElementById(user);

  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(computer)}${smallCompWord}! It's a TIE!`;

  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    //If the user wins.
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    //If the user loses.
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    //If the user and computer ties.
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main(){
  rock_div.addEventListener('click', () => game("r"))

  paper_div.addEventListener('click', () => game("p"))

  scissors_div.addEventListener('click', () => game("s"))
}

main();
