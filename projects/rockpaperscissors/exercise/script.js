/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**

function showResult(score, playerChoice, computerChoice) {   //5th fun
  // Hint: on a score of -1
  const resultDiv = document.getElementById('result')
  const handDiv = document.getElementById('hands')
  const playscoreDiv = document.getElementById('player-score')
 switch (score) {
    case -1:
      result.innerText = 'You Lose!'
      break;
    case 0:
      result.innerText = `It's a Draw!`
      break;
    case 1:
      result.innerText = `You Win!`
      break;
  }

  handDiv.innerText=`👱 ${playerChoice} vs 🤖 ${computerChoice}`
  playscoreDiv.innerText=`${Number(playscoreDiv.innerText)+score}`
}




function getResult(playerChoice, computerChoice) {    //4th function
  // return the result of score based on if you won, drew, or lost

  let score;

  // All situations where human draws, set `score` to 0
   if (playerChoice === computerChoice) {
    score = 0

  
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1

  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1

  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1

  // Otherwise human loses (aka set score to -1)
  } else {
    score = -1
  }

  // return score
  return score
}


function getComputerChoice() {              //3rd function
  const rpsChoice=['Rock','Paper','Scissors']
  const randomNumber=Math.floor(Math.random()*rpsChoice.length)
  return rpsChoice[randomNumber]
}


function onClickRPS(playerChoice) {              //2nd function

  console.log({playerChoice})
  let com=getComputerChoice()
  const score=getResult(playerChoice,com)
  showResult(score, playerChoice.value, com)
  
}


function playGame() {            //1st function
  
  // use querySelector to select all RPS Buttons
  
  let rpsButtons = document.querySelectorAll('.rpsButton')

// * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton)
  })

  let endGameButton=document.getElementById('endGameButton')
  endGameButton.onclick=()=>endGame()
}


// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0




// ** Calculate who won and show it on the screen **



// ** Make the RPS buttons actively listen for a click and do something once a click is detected **

// ** endGame function clears all the text on the DOM **
function endGame() {

  let playerScore=documnet.getElementById('player-score')
  let hands=documnet.getElementById('hands')
  let result=documnet.getElementById('result')

  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()