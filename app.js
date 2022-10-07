console.log("Hello game!")


function getComputerChoice(){
    // console.log(nme)
    const choices = ['rock','paper','scissors']
    // console.log(choices[1])
    let i = Math.floor(Math.random() * 3)
    // console.log(choices[i])
    return choices[i]
}

function gameRound(){
    let userChoice = prompt("Choose: (rock | paper | scissors): ")
    let computerChoice = getComputerChoice()

    if (computerChoice==userChoice){
        return "It's a TIE!"
    }

    if (userChoice=="rock"){
        
        if (computerChoice=="scissors"){
            return "Congrats! You Won., Rock Beat Scissors"
        }else{
            return `SORRY! You LOST., ${computerChoice} Beats Rock`
        }
    }else if(userChoice=="paper"){
        if (computerChoice=="rock"){
            return "Congrats! You Won., Paper Beats Rock"
        }else{
            return `SORRY! You LOST., ${computerChoice} Beats Paper`
        }
    }else if(userChoice=="scissors"){
        if (computerChoice=="paper"){
            return "Congrats! You Won., Scissors Beats Paper!"
        }else{
            return `SORRY! You LOST., ${computerChoice} Beats scissors`
        }
    }

}

console.log(gameRound())