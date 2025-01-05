console.log("Hello World!")

const divButtons = document.createElement('div');
document.body.appendChild(divButtons);
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorButton = document.createElement('button');

rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorButton.textContent = 'Scissor';

divButtons.appendChild(rockButton);
divButtons.appendChild(paperButton);
divButtons.appendChild(scissorButton);

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

 function getComputerChoice() {
    randNum = Math.ceil(Math.random()*3);
    console.log(randNum);
    if (randNum == 1) return "Rock" ;
    if (randNum == 2) return "Paper" ;
    if (randNum == 3) return "Scissor" ;   
 }
 
// Declare player's score
let humanScore = 0;
let computerScore = 0;
let noDraws = 0;
let round =1;

let humanChoice; // declaring humanChoice as global

function playGame(e) {
    
    humanChoice = e.target.textContent; // Getting human choice through event listener and bubbling down
    playRound(humanChoice, getComputerChoice());
}

let playRound = function (humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Rock") {
        noDraws += 1;
        console.log("It's a draw! Both Rock.")
    } else if (humanChoice == "Paper" && computerChoice == "Paper") {
        noDraws += 1;
        console.log("It's a draw! Both Paper.");
    } else if (humanChoice == "Scissor" && computerChoice == "Scissor") {
        noDraws += 1;
        console.log("It's a draw! Both Scissor.")
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore += 1;
        console.log("You win! Paper beats Rock.")
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        computerScore += 1;
        console.log("You lose! Paper beats Rock.")
    } else if (humanChoice == "Scissor" && computerChoice == "Rock") {
        computerScore += 1;
        console.log("You lose! Rock beats Scissor.")
    } else if (humanChoice == "Rock" && computerChoice == "Scissor") {
        humanScore += 1;
        console.log("You win! Rock beats Scissor.")
    } else if (humanChoice == "Paper" && computerChoice == "Scissor") {
        computerScore += 1;
        console.log("You lose! Scissor beats Paper.")
    } else if (humanChoice == "Scissor" && computerChoice == "Paper") {
        humanScore += 1;
        console.log("You win! Scissor beats Paper.")
    }
    if (round%9==0) {
        console.log('');
        console.log(`Your score: ${humanScore}  |  Comp score: ${computerScore} | Draws: ${noDraws}`);
        (humanScore > computerScore)? console.log("YOU WIN!")
        :(humanScore < computerScore)? console.log("You LOSE!")
        :console.log("DRAW!");
        console.log('');
    }
    round +=1;
}

divButtons.addEventListener('click', playGame);