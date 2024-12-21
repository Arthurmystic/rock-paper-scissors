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
    humanVal = parseInt(prompt ("Type either 1 for Rock, 2 for Paper or 3 for Scissor: "));
    if (humanVal === 1){
        return "Rock"
    } else if(humanVal === 2){
        return "Paper"
    } else if (humanVal === 3){
        return "Scissor";
    }else{
        return gethumanChoice();
    }
}
console.log(gethumanChoice())
// function getHUmanChoice(){

// }

