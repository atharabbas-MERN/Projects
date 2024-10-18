let userScore = 0;
let compScore = 0;
const msg = document.querySelector(".msg");
const choices = document.querySelectorAll(".choice");

const userScoreUpdate = document.querySelector("#user-score")
const compScoreUpdate = document.querySelector("#comp-score")

//Indentify the user-Choice
choices.forEach((choice) => {
   // console.log(choice);
    choice.addEventListener("click",() =>{
        let userChoice = choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice)
    });
});

const showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userScoreUpdate.innerText = userScore;
        console.log("You won!");
        msg.innerText = "You Won!"
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScoreUpdate.innerText = compScore;
        console.log("You lose!")
        msg.innerText = "You Lose!"
        msg.style.backgroundColor = "red";
    }
}

//Identify the Random Comp Choice
const genCompChoice = () =>{
    let options = ["rock","paper","scissors"];
    let idx = Math.floor(Math.random()*3)
    return(options[idx]);
};

//Game logic
const playGame = (userChoice) =>{
    console.log(userChoice);
    let compChoice = genCompChoice();
    console.log(compChoice);
    // Draw Game
    if(userChoice === compChoice){
        console.log("Game was draw!");
        msg.innerText = "Game was draw! Play again."
        msg.style.backgroundColor = "Yellow";
        msg.style.color = "black";
    }else{
        let userWin = true;
        if(userChoice ==="rock"){
            //paper, scissor
           userWin= compChoice === "paper"? false:true;
        }else if(userChoice ==="paper"){
            //rock, scissor
            userWin = compChoice ==="scissors"?false:true;
        }else if(userChoice === "scissors"){
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin);
    }
}