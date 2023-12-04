function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice == 1){
        return "rock";
    }else if (computerChoice == 2){
        return "paper";
    }else{
        return "scissors";
    }
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "tie"
    }else if(
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "paper")
    ){
            return "Player";
    }else{
            return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "tie"){
        return "It's a tie";
    }else if(result == "Player"){
        return `You won! ${playerSelection} beats ${computerSelection}`
    }else{
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.className;
        let computerSelection = getComputerChoice();
        const resultDisplay = document.querySelector(".results");
        const player = document.createElement("p");
        const computer = document.createElement("p");
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            playerScore += 1; 
            player.textContent = `Your score is ${playerScore}`
        }else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            computerScore += 1;
            computer.textContent = `The computer's score is ${computerScore}`
        }
        const result = document.createElement("p");
        result.textContent = `${playRound(playerSelection, computerSelection)}`
        resultDisplay.appendChild(player);
        resultDisplay.appendChild(computer);
        resultDisplay.appendChild(result); 
        endGame();
    })
})

function endGame(){
    if (playerScore == 5){
        document.write(`Your score is ${playerScore}, The computer's score is ${computerScore}, You won`)
    }else if(computerScore == 5){
        document.write(`The computer scored ${computerScore},  You scored ${playerScore}, The computer won`)
    }
}
