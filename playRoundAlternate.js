// let playRound = function (humanChoice, computerChoice){
//     const choices = {
//         bothRock: () => humanChoice == "Rock" && computerChoice == "Rock",
//         bothPaper: () => humanChoice == "Paper" && computerChoice == "Paper",
//         bothScissor: () => humanChoice == "Scissor" && computerChoice == "Scissor",
       
//         PaperRock: () => humanChoice == "Paper" && computerChoice == "Rock",
//         RockPaper: () => humanChoice == "Rock" && computerChoice == "Paper",
       
//         ScissorRock: () => humanChoice == "Scissor" && computerChoice == "Rock",
//         RockScissor: () => humanChoice == "Rock" && computerChoice == "Scissor",
        
//         PaperScissor: () => humanChoice == "Paper" && computerChoice == "Scissor",
//         ScissorPaper: () => humanChoice == "Scissor" && computerChoice == "Paper"
//     }
    
//     switch (choices){
//         case choices.bothRock():
//             return "It's a draw! Both rock."
//             break;
//         case choices.bothPaper():
//             return "It's a draw! Both Paper."
//             break;
//         case choices.bothScissor():
//             return "It's a draw! Both Scissor."
//             break;
//         case choices.PaperRock():
//             humanScore +=1;
//             return "You win! Paper beats Rock."
//             break;
//         case choices.RockPaper():
//             computerScore += 1;
//             return "You lose! Paper beats Rock."
//             break;
//         case choices.ScissorRock():
//             computerScore += 1;
//             return "You lose! Rock beats Scissor"
//             break;
//         case choices.RockScissor():
//             humanScore += 1;
//             return "You win! Rock beats Scissor."
//             break;
//         case choices.PaperScissor():
//             computerScore += 1;
//             return "You lose! Scissor beats Paper."
//             break;
//         case choices.ScissorPaper():
//             humanScore += 1;
//             return "You win! Scissor beats Paper."
//             break;
        
//     }

// }

// playRound(gethumanChoice(), getComputerChoice())