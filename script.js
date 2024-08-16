let humanScore, computerScore = 0;
let matchCount=0;


function getComputerChoice() {
    let x = Math.random();
    console.log("L'ordinateur a choisit : ");
    if (x < 1 / 3) {
        console.log("Rock");
        return 0;
    } else if (x < 2 / 3) {
        console.log("Paper");
        return 1;
    }
    else{
        console.log("Cissors");
        return 2;
    } 
}

function getHumanChoice(humanChoice) {
    matchCount++;
    console.log("L'humain a choisit : ");
    if (humanChoice === 0) {
        console.log("Rock");
    } else if (humanChoice === 1) {
        console.log("Paper");
    } else {
        console.log("Cissors");
    }
    let computerChoice = getComputerChoice();
    displayWinner(compareChoice(humanChoice,computerChoice));
    console.log(matchCount + " humanScore" + humanScore);
    if(matchCount===5){
        if(humanScore>computerScore)
        {
            console.log("L'humain a gagné ! " + humanScore + " à " + computerScore);
        }
        else{
            console.log("L'ordinateur a gagné ! " + computerScore + " à " + humanScore);
        }
        matchCount=0;
        
    }
}

function compareChoice(humanChoice, computerChoice){
    // 0 = tied, 1 = human win, 2 = computer win

    if (humanChoice===computerChoice){
        return 0;
    }
    else if(((humanChoice===0)||(computerChoice===0)) && ((humanChoice===2)||(computerChoice===2))){
        console.log("here");
        return humanChoice===0? 1 :2;
    }
    else
    {
        return humanChoice>computerChoice?1:2;
    } 
}

function displayWinner(choiceComparaison){
    if(choiceComparaison===0)
    {
        console.log("Tie !");
    }
    else if (choiceComparaison===1)
    {
        humanScore++;
        console.log("Human win !");
    }
    else
    {
        console.log("Computer win !");
        computerScore++;
    }

    console.log("---------")
}


