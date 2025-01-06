console.log("Hello World!");

// CORE LOGIC AND UTILITIES

// Array of possible choices for the game
const choices = ['Rock', 'Paper', 'Scissor'];

// Object containing inline styles for buttons
let buttonStyles = {
    Rock: `
        background-color: #FF6F00;
        border-color: #E65100;
        color: #FFFFFF;
        border-radius: 0.5em;
        width:6em;
        height:2em;
        font-size: 16px;
        `,
    Paper: `
        background-color: #00E5FF;
        border-color: #009688;
        color: #004D40;
        border-radius: 0.5em;
        width:6em;
        height:2em;
        font-size: 16px;
        `,
    Scissor: `
        background-color: #FF1744;
        border-color: #D50000;
        color: #FFFFFF;
        border-radius: 0.5em;
        width:6em;
        height:2em;
        font-size: 16px;
        `,
};

// Object to track the current game state (scores and draws)
let gameState = {
    humanScore: 0,
    computerScore: 0,
    noDraws: 0,
};

// Function to randomly select the computer's choice from the `choices` array
let getComputerChoice = function (choices) {
    return choices[Math.floor(Math.random() * 3)];
};

// Object defining possible outcomes for each combination of choices
let outcomes = {
    Rock: { Rock: "draw", Paper: "lose", Scissor: "win" },
    Paper: { Rock: "win", Paper: "draw", Scissor: "lose" },
    Scissor: { Rock: "lose", Paper: "win", Scissor: "draw" },
};

// Function to play a single round based on the human and computer choices
let playRound = function (humanChoice, computerChoice) {
    let result = outcomes[humanChoice][computerChoice]; // Determine round result
    if (result === "win") {
        gameState.humanScore++; // Increment human score on win
        spanResults.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (result === "lose") {
        gameState.computerScore++; // Increment computer score on loss
        spanResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    } else {
        gameState.noDraws++; // Increment draws on tie
        spanResults.textContent = `It's a draw! Both chose ${humanChoice}.`;
    }
    // Check if the game has ended (score reaches 5)
    if (gameState.humanScore == 5 || gameState.computerScore == 5) {
        endGame();
    }
};

// Function to end the game and display final results
function endGame() {
    let finalMessage = gameState.humanScore > gameState.computerScore ? "YOU WIN!"
        : (gameState.humanScore < gameState.computerScore) ? "YOU LOSE!"
            : "DRAW!";
    // Display final results and disable further interactions
    paraFinalResults.innerHTML = `
        <br>
        Your score: ${gameState.humanScore} | Comp score: ${gameState.computerScore} | Draws: ${gameState.noDraws} <br>
        ${finalMessage} <br>
        Game Over! Refresh to Play again`;
    divButtons.removeEventListener('click', playGame); // Stop listening for clicks
}

// Global variable to store the human's choice for the round
let humanChoice;

// Function to handle button clicks and trigger a round
let playGame = function (e) {
    if (e.target.classList.contains('btn')) { // Ensure a valid button was clicked
        humanChoice = e.target.dataset.choice; // Get choice from data-attribute
        playRound(humanChoice, getComputerChoice(choices)); // Start the round
    }
};

// DOM CREATION

// Create a container for buttons and append it to the document
const divButtons = document.createElement('div');
document.body.appendChild(divButtons);

// Dynamically create buttons for each choice, assign styles, and append to the container
choices.forEach(choice => {
    let button = document.createElement('button'); // Create button
    button.setAttribute('class', 'btn');        // Add button class
    button.setAttribute('data-choice', choice); // Assign data-attribute
    button.textContent = choice;              // Set button label
    button.style.cssText = buttonStyles[choice]; // Apply inline styles
    divButtons.appendChild(button);          // Append button to container
});

// Create a paragraph to display informational text and append to the document
const para = document.createElement('p');
document.body.appendChild(para);

// Create a div for displaying round results and append it to the document
const divDisplayResults = document.createElement('div');
const spanResults = document.createElement('span'); // Span to update round results
divDisplayResults.appendChild(spanResults);
document.body.appendChild(divDisplayResults);

// Create a paragraph to display final results and append it to the document
const paraFinalResults = document.createElement('p');
document.body.appendChild(paraFinalResults);

// STYLING

// Style the buttons container (horizontal layout with spacing)
divButtons.style.cssText = `
    display: flex;
    gap: 10rem;
    justify-content: center;
    `;

// Center align final results
paraFinalResults.style.cssText = `
    text-align:center;
    margin-top: 0.1rem;
    `;

// Center align round results
divDisplayResults.style.cssText = `
    text-align:center;
    margin-top: 1rem;
    `;

// EVENT LISTENERS

// Add event listener to buttons container to handle game logic
divButtons.addEventListener('click', playGame);
