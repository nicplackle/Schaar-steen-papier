const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const steen_div = document.getElementById("s");
const schaar_div = document.getElementById("c");
const papier_div = document.getElementById("p");

function getComputerChoice() {
  const choices = ["s", "c", "p"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "s") return "Steen";
  if (letter === "p") return "Papier";
  if (letter === "c") return "Schaar";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}
    wint van ${convertToWord(computerChoice)}$
    {smallCompWord}
    . Gewonnen !!!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(function() {
    userChoice_div.classList.remove("green-glow");
  }, 300);
}

function verliest(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  compScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}
    verliest van ${convertToWord(computerChoice)}$
    {smallCompWord}
    . Loser !!!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(function() {
    userChoice_div.classList.remove("red-glow");
  }, 300);
}

function gelijk(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}
    Gelijkspel ${convertToWord(computerChoice)}
    {smallCompWord}
    . Maar toch ben jij de loser !!!`;
  userChoice_div.classList.add("grey-glow");
  setTimeout(function() {
    userChoice_div.classList.remove("grey-glow");
  }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "sc":
    case "ps":
    case "cp":
      win(userChoice, computerChoice);
      console.log("JE HEBT GEWONNEN!");
      break;
    case "cp":
    case "ps":
    case "sc":
      verliest(userChoice, computerChoice);
      console.log("DE COMPUTER HEEFT GEWONNEN!");
      break;
    case "ss":
    case "pp":
    case "cc":
      gelijk(userChoice, computerChoice);
      console.log("NIEMAND WINT HIER!");
      break;
  }
}

function main() {
  steen_div.addEventListener("click", function() {
    game("s");
  });

  schaar_div.addEventListener("click", function() {
    game("c");
  });

  papier_div.addEventListener("click", function() {
    game("p");
  });
}

main();
