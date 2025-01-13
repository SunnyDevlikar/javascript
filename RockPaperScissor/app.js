const btn = document.querySelectorAll(".btn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let userScore = 0;
let compScore = 0;
let userWin = true;

//Accessing userscore and computer score 

const userScoreBoard = document.querySelector("#userScore");
const compScoreBoard = document.querySelector("#compScore");

//Function for Draw Condition
const DrawGame = () => {
    console.log("Draw");
    msg.innerText = "Game Draw, Play Again"
    msg.style.backgroundColor = "rgb(220, 220, 220)";
        msg.style.color = "#081b31"
}

//Function to show winner based upon playGame() function

const showWinner = (userWin, userchoice, computerschoice) => {
    if(userWin){
        userScore++;
        userScoreBoard.innerText = userScore;
        msg.innerText = `You Won! Your ${userchoice} beats ${computerschoice}`;
        msg.style.backgroundColor = "rgb(255, 245, 180)";
        msg.style.color = "#081b40"
    }
    else{
        compScore++;
        compScoreBoard.innerText = compScore;
        msg.innerText = `You Lose, ${computerschoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "rgb(230, 200, 250)";
        msg.style.color = "#081b40"
    }
} 

//function to handle both the user and computer generated choice and declare the winner
const playGame = (userchoice) => {

    console.log("user Choice", userchoice);

    const computerschoice = compsChoice();

    console.log("Computer Choice", computerschoice);

    if(userchoice == computerschoice)
    {
        DrawGame();
    }
    else if(
    (userchoice=== "rock" && computerschoice=== "scissor") || 
    (userchoice=== "scissor" && computerschoice=== "paper") || 
    (userchoice=== "paper" && computerschoice=== "rock")
    ){
        userWin = true;
        showWinner(userWin, userchoice, computerschoice);

    }
    else{
        userWin = false;
        showWinner(userWin, userchoice, computerschoice);
        
    }
};

//Computer Choice Generation
const compsChoice = () => {

    const options = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
};

//Function to get Your Choice & calling playGame() function
btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        const userchoice = btn.getAttribute("id");
        playGame(userchoice);
});
});

