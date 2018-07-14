function computerPlay() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection) {

  const computerSelection = computerPlay();
  let result ="";

  if(playerSelection==computerSelection) {
    result = "Draw!";
  }
  else if(playerSelection=="rock") {
    if(computerSelection=="paper"){
      result = "Computer wins!"
    }
    else {
      result = "Player wins!"
    }
  }
  else if(playerSelection=="paper"){
    if(computerSelection=="scissors"){
      result = "Computer wins!"
    }
    else {
      result = "Player wins!"
    }
  }
  else if(playerSelection=="scissors"){
    if(computerSelection=="rock"){
      result = "Computer wins!"
    }
    else {
      result = "Player wins!"
    }
  }

  document.getElementsByClassName("result")[0].innerHTML="Player chose "+playerSelection+"<br>"+"Computer chose "+computerSelection+"<br>"+result;
  if(result=="Player wins!") {
    updateScore("player")
  }
  else {
    updateScore("computer")
  }

}

function updateScore(winner) {
  if(winner=="player") {
    let score = parseInt(document.getElementById('playerScore').innerHTML)
    score++
    document.getElementById('playerScore').innerHTML = score
    if(score == 5) {
      score = 0
      document.getElementById('playerScore').innerHTML = score
      document.getElementById('compScore').innerHTML = score
      alert("Congratulation! You win!")
    }
  }
  else if(winner=="computer") {
    let score = parseInt(document.getElementById('compScore').innerHTML)
    score++;
    document.getElementById('compScore').innerHTML = score
    if(score == 5) {
      score = 0
      document.getElementById('playerScore').innerHTML = score
      document.getElementById('compScore').innerHTML = score
      alert("Computer wins! Better luck next time.")
    }
  }

}

document.getElementById('rockBtn').addEventListener("click", function(){playRound('rock')})
document.getElementById('paperBtn').addEventListener("click", function(){playRound('paper')})
document.getElementById('ScissorsBtn').addEventListener("click", function(){playRound('scissors')})
