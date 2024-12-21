console.log("Hello World!")


// Computer choice of Rock or Paper or Scissor
randNum = Math.random() * 10;
let getComputerChoice = () => randNum < 3 ?
    "Rock" :
    randNum < 6 ?
        "Paper" :
        "Scissor"
console.log(getComputerChoice())

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
console.log(gethumanChoice())


