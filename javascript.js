console.log("Hello World!");

// CORE LOGIC AND UTILITIES

// Function to get the computer's choice (Rock, Paper, or Scissor) randomly.
let getComputerChoice = function () {
    randNum = Math.ceil(Math.random() * 3); // Generates a random number between 1 and 3
    if (randNum == 1) return "Rock";
    if (randNum == 2) return "Paper";
    if (randNum == 3) return "Scissor";
}

// Declare player's score and other game-related variables
let humanScore = 0;  // Human player's score
let computerScore = 0;  // Computer's score
let noDraws = 0;  // Count of draws
let round = 1;  // Track the current round number

// Function to play a round of the game
let playRound = function (humanChoice, computerChoice) {
    // Handle different outcomes of the round based on the choices made
    if (humanChoice == "Rock" && computerChoice == "Rock") {
        noDraws += 1;  // Increment draw count
        spanResults.textContent = "It's a draw! Both Rock.";  // Display result
    } else if (humanChoice == "Paper" && computerChoice == "Paper") {
        noDraws += 1;
        spanResults.textContent = "It's a draw! Both Paper.";
    } else if (humanChoice == "Scissor" && computerChoice == "Scissor") {
        noDraws += 1;
        spanResults.textContent = "It's a draw! Both Scissor.";
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore += 1;  // Increment human's score
        spanResults.textContent = "You win! Paper beats Rock.";
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        computerScore += 1;  // Increment computer's score
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

    // Check if either player has reached a score of 5 to end the game
    if (humanScore == 5 || computerScore == 5) {
        let results = humanScore > computerScore ? "YOU WIN!"
            : (humanScore < computerScore) ? "YOU LOSE!"
                : "DRAW!";

        // Display the final results and scores
        paraFinalResults.innerHTML = `  <br>
        Your score: ${humanScore} | Comp score: ${computerScore} | Draws: ${noDraws} <br>
                             ${results} <br>
                Game Over! Refresh to Play again`;

        divButtons.removeEventListener('click', playGame); // Remove the event listener to stop the game
    }
    round += 1;  // Increment the round counter
}

// Declare humanChoice variable as global
let humanChoice;

// Function to handle the game flow when a button is clicked
let playGame = function (e) {
    humanChoice = e.target.textContent; // Get human's choice based on the clicked button text
    playRound(humanChoice, getComputerChoice());  // Pass choices to play the round
}

// DOM CREATION

// Create and append the container div for buttons
const divButtons = document.createElement('div');
document.body.appendChild(divButtons);

// Create buttons for Rock, Paper, and Scissors
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorButton = document.createElement('button');

rockButton.setAttribute('class', 'btn');
paperButton.setAttribute('class', 'btn');
scissorButton.setAttribute('class', 'btn');

// Create and append a paragraph element to display text
const para = document.createElement('p');
document.body.appendChild(para);

// Create and append a div for displaying the round results
const divDisplayResults = document.createElement('div');
const spanResults = document.createElement('span');
divDisplayResults.appendChild(spanResults);
document.body.appendChild(divDisplayResults);

// Create and append a paragraph element to display final results
const paraFinalResults = document.createElement('p');
document.body.appendChild(paraFinalResults);

// Set the text for the buttons
rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorButton.textContent = 'Scissor';

// Append the buttons to the divButtons container
divButtons.appendChild(rockButton);
divButtons.appendChild(paperButton);
divButtons.appendChild(scissorButton);

// STYLING

// Apply CSS styling to the divButtons container (buttons layout)
divButtons.style.cssText = `
                display: flex;
                gap: 5rem;
                `;

// Apply CSS styling to each button
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

// Style for displaying the final result (center alignment)
paraFinalResults.style.cssText = `
    text-align:center;
    `;

// EVENT LISTENERS

// Add an event listener to the divButtons container to start the game
divButtons.addEventListener('click', playGame);

// divButtons.addEventListener('mouseover', (e) => {
//     if (e.target.className == 'btn'){
//         e.target.style.background = 'lightgreen';
//     }
// });
