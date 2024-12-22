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
let gethumanChoice =function(){
    humanVal = prompt ("Type either Rock, Paper or Scissor (case insenstive): ");
    humanVal = humanVal.slice(0,1).toUpperCase() + humanVal.slice(1).toLowerCase();
    if (humanVal === "Rock"){
        return "Rock"
    } else if(humanVal === "Paper"){
        return "Paper"
    } else if (humanVal === "Scissor"){
        return "Scissor";
    }else{
        return gethumanChoice();
    }
}
// console.log(gethumanChoice())

// Declare player's score
let humanScore = 0;
let computerScore = 0; 

let playRound = function (humanChoice, computerChoice){
    if (humanChoice == "Rock" && computerChoice == "Rock"){
        return "It's a draw! Both rock.";
    }else if (humanChoice == "Paper" && computerChoice == "Paper"){
        return "It's a draw! Both Paper.";
    }else if (humanChoice == "Scissor" && computerChoice == "Scissor"){
        return "It's a draw! Both Scissor."
    }else if (humanChoice == "Paper" && computerChoice == "Rock"){
        humanScore +=1;
        return "You win! Paper beats Rock."
    }else if (humanChoice == "Rock" && computerChoice == "Paper"){
        computerScore += 1;
        return "You lose! Paper beats Rock."
    }else if (humanChoice == "Scissor" && computerChoice == "Rock"){
        computerScore += 1;
        return "You lose! Rock beats Scissor"   
    }else if (humanChoice == "Rock" && computerChoice == "Scissor"){
        humanScore += 1;
        return "You win! Rock beats Scissor."
    }else if (humanChoice == "Paper" && computerChoice == "Scissor"){
        computerScore += 1;
        return "You lose! Scissor beats Paper."
    }else if (humanChoice == "Scissor" && computerChoice == "Paper"){
        humanScore += 1;
        return "You win! Scissor beats Paper."
    } 
}


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
console.log(playRound(gethumanChoice(), getComputerChoice()))