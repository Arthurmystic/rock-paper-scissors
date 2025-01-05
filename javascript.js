console.log("Hello World!")


// Computer choice of Rock or Paper or Scissor
randNum = Math.random() * 10;
let getComputerChoice = () => randNum < 3 ?
    "Rock" :
    randNum < 6 ?
        "Paper" :
        "Scissor"
// //console.log(getComputerChoice())

// function getComputerChoice() {
//     randNum = Math.random() * 10;
//     if (randNum < 3) {
//         return "Rock"
//     } else if (randNum < 6) {
//         return "Paper"
//     } else {
//         return "Scissor"
//     }
// }

// Human choice of Rock or Paper or Scissor
let gethumanChoice = function () {
    humanVal = prompt("Type either Rock, Paper or Scissor (case insenstive): ");
    humanVal = humanVal.slice(0, 1).toUpperCase() + humanVal.slice(1).toLowerCase();
    if (humanVal === "Rock") {
        return "Rock"
    } else if (humanVal === "Paper") {
        return "Paper"
    } else if (humanVal === "Scissor") {
        return "Scissor";
    } else {
        return gethumanChoice();
    }
}
// console.log(gethumanChoice())

// Declare player's score
let humanScore = 0;
let computerScore = 0;
let noDraws = 0;

let playRound = function (humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Rock") {
        noDraws += 1;
        return "It's a draw! Both Rock.";
    } else if (humanChoice == "Paper" && computerChoice == "Paper") {
        noDraws += 1;
        return "It's a draw! Both Paper.";
    } else if (humanChoice == "Scissor" && computerChoice == "Scissor") {
        noDraws += 1;
        return "It's a draw! Both Scissor."
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore += 1;
        return "You win! Paper beats Rock."
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        computerScore += 1;
        return "You lose! Paper beats Rock."
    } else if (humanChoice == "Scissor" && computerChoice == "Rock") {
        computerScore += 1;
        return "You lose! Rock beats Scissor"
    } else if (humanChoice == "Rock" && computerChoice == "Scissor") {
        humanScore += 1;
        return "You win! Rock beats Scissor."
    } else if (humanChoice == "Paper" && computerChoice == "Scissor") {
        computerScore += 1;
        return "You lose! Scissor beats Paper."
    } else if (humanChoice == "Scissor" && computerChoice == "Paper") {
        humanScore += 1;
        return "You win! Scissor beats Paper."
    }
}

// console.log(playRound(gethumanChoice(), getComputerChoice()))
/*let playGame = function (){
    for (let round =1; round <=5; round++){
        //getComputerChoice();
        //gethumanChoice();
        result = playRound(gethumanChoice(), getComputerChoice());
        console.log (`Round: ${round} | Result: ${result}`);
    }
    console.log(" ")
    console.log(`Your final score: ${humanScore}  |  Computers final score: ${computerScore} | Draws: ${noDraws}`);
}*/

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

//playGame();