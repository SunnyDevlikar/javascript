const color = document.querySelectorAll(".color");
let msg = document.querySelector("#head");
let block1 = document.getElementById("one");
let block2 = document.getElementById("two");
let block3 = document.getElementById("three");
let block4 = document.getElementById("four");


let userScore =0;
let compScore =0;
let userWin = true;


//Accessing the user Score
const userScoreBoard = document.querySelector("#userScore");
const compScoreBoard = document.querySelector("#compScore");


//Function to showWinner based on playGame()
const showWinner=( userWin, computerchoice) => {
    if(userWin){
        userScore++;
        userScoreBoard.innerText = userScore;
        msg.innerText = "Correct";
    }
    else{
        msg.innerText = `Wrong ! It was ${computerchoice}`;
        compScore++;
        compScoreBoard.innerText = compScore;
    }
};

//handle the color comparison from rbg to text format
const compareColors = (userColor, correctColor) => {
  const tempEl = document.createElement("div");
  tempEl.style.color = correctColor;
  document.body.appendChild(tempEl);
  const correctRGB = getComputedStyle(tempEl).color;
  document.body.removeChild(tempEl);

  //UPADTE
  const tempEl2 = document.createElement("div");
  tempEl2.style.color = userColor;
  document.body.appendChild(tempEl2);
  const userRGB = getComputedStyle(tempEl2).color;
  document.body.removeChild(tempEl2);

  return userRGB === correctRGB;
};



//Handling the functionality of the userchoice and computerchoice and declare the winner
const playgame = (userColor) =>{

    const computerchoice = window.currentcolor;
    //UPDATED
    const userWin = compareColors(userColor, computerchoice);
    showWinner(userWin, computerchoice);

       // showWinner(userWin,  computerchoice);
   
    setTimeout(setupGame, 1000);
}

//List of Colors
const options = [
    "Red","Green","Blue","Yellow","Orange","Purple","Pink","Brown","Black","White","Gray","Cyan","Magenta","Lime","Navy"
];

//select four random Choice of colors
const getColors = () => {

    const shuffled = [...options].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
};
    

// Assign colors to buttons and choose the correct one
function setupGame() {
  const colors = getColors();
  const correctColor = colors[Math.floor(Math.random() * 4)];
  msg.innerText = `guess the color`;
 window.currentcolor = correctColor; //set correctcolor globally

  //Assigning colors to each buttons
block1.style.backgroundColor = colors[0];
block2.style.backgroundColor = colors[1];
block3.style.backgroundColor = colors[2];
block4.style.backgroundColor = colors[3];


userScoreBoard.innerText = userScore;
}




//Function to get user choice
color.forEach((btn) => {
    btn.addEventListener("click", () => {
        const clickedcolor = btn.style.backgroundColor; 
        playgame(clickedcolor)

});
});

window.onload = setupGame;
