function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1){
        return "rock";
    }else if (computerChoice === 2){
        return "paper";
    }else{
        return "scissors";
    }
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "tie"
    }else if(
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper")
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

function getPlayerChoice(){
    let validated = false;
    while(validated == false){
        const choice = prompt("Enter rock or paper or scissors");
        if (choice == null){
            continue;
        }
        const choiceInLowerCase = choice.toLowerCase();
        if (choiceInLowerCase == "rock" || choiceInLowerCase == "paper" || choiceInLowerCase == "scissors"){
            validated = true;
            return choiceInLowerCase;
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome!")
    for (let i = 0;i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("-------------------")
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            playerScore++;
        }else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            computerScore++;
        }
    }
    console.log("Game Over");
    if (playerScore > computerScore){
        console.log("You won the game!!!");
    }else if(playerScore < computerScore){
        console.log("The computer won the game!!!");
    }else {
        console.log("The game was a tie");
    }
}

game();

const buttons = document.querySelectorAll(".rps");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.className;
    })
})