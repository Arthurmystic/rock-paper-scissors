console.log("Hello World!")

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

let humanChoice =function(){
    humanVal = parseInt(prompt ("Type either 1 for Rock, 2 for Paper or 3 for Scissor: "))
    if (humanVal === 1 || humanVal === 2 || humanVal === 3){
        // Do nothing 
    }else{
        humanChoice()
    }
}
//humanChoice()
// function getHUmanChoice(){

// }

