// console.log("Hello game!")

function getComputerChoice(){
    // console.log(nme)
    const choices = ['rock','paper','scissors']
    // console.log(choices[1])
    let i = Math.floor(Math.random() * 3)
    // console.log(choices[i])
    return choices[i]
}

let userScore = 0;
let comptScore = 0;

function gameRound(){
    let userChoice = prompt("Choose: (rock | paper | scissors): ").toLowerCase()
    let computerChoice = getComputerChoice()

    if (computerChoice==userChoice){
        return "It's a TIE!"
    }

    if (userChoice=="rock"){
        
        if (computerChoice=="scissors"){
            userScore+=1;
            return "Congrats! You Won., Rock Beat Scissors"
        }else{
            comptScore+=1;
            return `SORRY! You LOST., ${computerChoice} Beats Rock`
        }
    }else if(userChoice=="paper"){
        if (computerChoice=="rock"){
            userScore+=1;
            return "Congrats! You Won., Paper Beats Rock"
        }else{
            comptScore+=1
            return `SORRY! You LOST., ${computerChoice} Beats Paper`
        }
    }else if(userChoice=="scissors"){
        if (computerChoice=="paper"){
            userScore+=1;
            return "Congrats! You Won., Scissors Beats Paper!"
        }else{
            comptScore+=1;
            return `SORRY! You LOST., ${computerChoice} Beats scissors`
        }
    }

}

function game(){
    for (let i =0;i<5;i++){
        console.log(gameRound())
    }
    console.log(`User Score: ${userScore}`)
    console.log(`Computer Score: ${comptScore}`)
    userScore>comptScore?console.log("You Won!"):console.log("You LOST!")
}

// console.log(gameRound())
game()