let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const steen_div = document.getElementById("steen");
const schaar_div = document.getElementById("schaar");
const papier_div = document.getElementById("papier");

function getComputerChoice() {
  const choices = ["steen", "schaar", "papier"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =
    userChoice + " wint van " + computerChoice + ". Gewonnen !!!";
  userChoice_div.classList.add("green-glow");
  setTimeout(function() {
    userChoice_div.classList.remove("green-glow");
  }, 300);
}

function verliest(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML =
    userChoice + " verliest van " + computerChoice + ". Loser !!!";
  userChoice_div.classList.add("red-glow");
  setTimeout(function() {
    userChoice_div.classList.remove("red-glow");
  }, 300);
}

function gelijk(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML =
    userChoice + " en " + computerChoice + ". Maar toch ben jij de loser !!!";
  userChoice_div.classList.add("grey-glow");
  setTimeout(function() {
    userChoice_div.classList.remove("grey-glow");
  }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "steenschaar":
    case "papiersteen":
    case "schaarpapier":
      win(userChoice, computerChoice);
      // misschien de log eruit
      console.log("JE HEBT GEWONNEN!");
      break;
    case "schaarpapier":
    case "papiersteen":
    case "steenschaar":
      verliest(userChoice, computerChoice);
      // misschien de log eruit
      console.log("DE COMPUTER HEEFT GEWONNEN!");
      break;
    case "steensteen":
    case "papierpapier":
    case "schaarschaar":
      gelijk(userChoice, computerChoice);
      // misschien de log eruit
      console.log("NIEMAND WINT HIER!");
      break;
  }
}

function main() {
  steen_div.addEventListener("click", function() {
    game("steen");
  });

  schaar_div.addEventListener("click", function() {
    game("schaar");
  });

  papier_div.addEventListener("click", function() {
    game("papier");
  });
}

main();
