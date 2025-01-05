console.log("Hello World!");

// CORE LOGIC AND UTILITIES

// Get computer choice.
let getComputerChoice = function () {
    randNum = Math.ceil(Math.random() * 3);
    if (randNum == 1) return "Rock";
    if (randNum == 2) return "Paper";
    if (randNum == 3) return "Scissor";
}

// Declare player's score
let humanScore = 0;
let computerScore = 0;
let noDraws = 0;
let round = 1;

let playRound = function (humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Rock") {
        noDraws += 1;
        spanResults.textContent = "It's a draw! Both Rock.";
    } else if (humanChoice == "Paper" && computerChoice == "Paper") {
        noDraws += 1;
        spanResults.textContent = "It's a draw! Both Paper.";
    } else if (humanChoice == "Scissor" && computerChoice == "Scissor") {
        noDraws += 1;
        spanResults.textContent = "It's a draw! Both Scissor.";
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore += 1;
        spanResults.textContent = "You win! Paper beats Rock.";
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        computerScore += 1;
        spanResults.textContent = "You lose! Paper beats Rock.";
    } else if (humanChoice == "Scissor" && computerChoice == "Rock") {
        computerScore += 1;
        spanResults.textContent = "You lose! Rock beats Scissor.";
    } else if (humanChoice == "Rock" && computerChoice == "Scissor") {
        humanScore += 1;
        spanResults.textContent = "You win! Rock beats Scissor.";
    } else if (humanChoice == "Paper" && computerChoice == "Scissor") {
        computerScore += 1;
        spanResults.textContent = "You lose! Scissor beats Paper.";
    } else if (humanChoice == "Scissor" && computerChoice == "Paper") {
        humanScore += 1;
        spanResults.textContent = "You win! Scissor beats Paper.";
    }
    if (humanScore == 5 || computerScore == 5) {
        let results = humanScore > computerScore ? "YOU WIN!"
            : (humanScore < computerScore) ? "YOU LOSE!"
                : "DRAW!";

        paraFinalResults.innerHTML = `  <br>
        Your score: ${humanScore} | Comp score: ${computerScore} | Draws: ${noDraws} <br>
                             ${results} <br>
                Game Over! Refresh to Play again`;

        divButtons.removeEventListener('click', playGame); //removing listener to end game
    }
    round += 1;
}

let humanChoice; // declaring humanChoice as global

let playGame = function (e) {
    humanChoice = e.target.textContent; // Getting human choice through event listener and bubbling down
    playRound(humanChoice, getComputerChoice());
}

// DOM CREATION
const divButtons = document.createElement('div');
document.body.appendChild(divButtons);
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorButton = document.createElement('button');
const para = document.createElement('p');
document.body.appendChild(para);
const divDisplayResults = document.createElement('div');
const spanResults = document.createElement('span');
divDisplayResults.appendChild(spanResults);
document.body.appendChild(divDisplayResults);
const paraFinalResults = document.createElement('p');
paraFinalResults.setAttribute('id', 'paraResults');
document.body.appendChild(paraFinalResults);

rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorButton.textContent = 'Scissor';

divButtons.appendChild(rockButton);
divButtons.appendChild(paperButton);
divButtons.appendChild(scissorButton);

// STYLING
divButtons.style.cssText = `
                display: flex;
                gap: 5rem;
                `;
rockButton.style.cssText = `
                background-color: #FF6F00;
                border-color: #E65100;
                color: #FFFFFF;
                border-radius: 0.5em;
                width:6em;
                height:2em;
                font-size: 16px;
                `;
paperButton.style.cssText = `
                background-color: #00E5FF;
                border-color: #009688;
                color: #004D40;
                border-radius: 0.5em;
                width:6em;
                height:2em;
                font-size: 16px;
                `;
scissorButton.style.cssText = `
                background-color: #FF1744;
                border-color: #D50000;
                color: #FFFFFF;
                border-radius: 0.5em;
                width:6em;
                height:2em;
                font-size: 16px;
                `;

paraFinalResults.style.cssText = `
    text-align:center;
    `;

// EVENT LISTENERS
divButtons.addEventListener('click', playGame);