let userScore = 0;
let computerScore = 0;
let rounds = 0;

//console.log(userScore);
//console.log(computerScore);

function computerPlay(){
    let randNum = Math.floor(Math.random()*3);
    //console.log(randNum);

    switch (randNum){
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "rock";
    }
}

function playerSelection(){
    let playerInput = prompt("Rock, Paper or Scissors?").toLowerCase();

    if (playerInput == "rock" || playerInput == "paper" || playerInput == "scissors"){
        return playerInput;    
    }else{
        return "rock";
    };
}

//let computerInput = computerPlay();
//let userInput = playerSelection();


function playRound(userInput, computerInput){
    

    console.log("Computer: " + computerInput);
    console.log("User: " + userInput);

    if (userInput == computerInput){
        return userInput + " vs " + computerInput + ": It's a tie! No points!";

    }else if (userInput == "rock" && computerInput == "scissors"){
        userScore += 1;
        return userInput + " vs " + computerInput + ": Rock beats scissors! Player wins!";  

    }else if (userInput == "scissors" && computerInput == "paper"){
        userScore += 1;
        return userInput + " vs " + computerInput + ": Scissors beats paper! Player wins!";

    }else if (userInput == "paper" && computerInput == "rock"){
        userScore += 1;
        return userInput + " vs " + computerInput + ": Paper beats rock! Player wins!";    
    // Computer Wins

    }else if (computerInput == "rock" && userInput == "scissors"){
        computerScore += 1;
        return userInput + " vs " + computerInput + ": Rock beats scissors! Computer wins!";  

    }else if (computerInput == "scissors" && userInput == "paper"){
        computerScore += 1;
        return userInput + " vs " + computerInput + ": Scissors beats paper! Computer wins!";

    }else if (computerInput == "paper" && userInput == "rock"){
        computerScore += 1;
        return userInput + " vs " + computerInput + ": Paper beats rock! Computer wins!";     
    };   
}

function game(){
    
    if (rounds <5){
        rounds+=1;
        let computerInput = computerPlay();
        let userInput = playerSelection();
        console.log(playRound(userInput, computerInput));
        game();    
    }else{
        console.log("User Score: " + userScore);
        console.log("Computer Score: " + computerScore); 

        if (userScore > computerScore){
            console.log("Player Wins!");
        }else{
            console.log("Computer Wins!");
        }
    }

    
}

game();