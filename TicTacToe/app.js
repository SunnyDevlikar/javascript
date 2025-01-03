
//Accessing the elements of webpage

let btn = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
const newgame = document.querySelector("#newGame");
const msgContainer = document.querySelector(".msgConatiner");
const msg = document.querySelector("#msg");


let Clickcount = 0;

/**We have to decide the player turn that is to decide 
 * whether to add "O" or "X" to the table*/

let turn =true;

//storing the winning patterns of tic tac toe 
//then we will match the possible combination in order to determine the winner
const winningPattrens = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]  
];

/**we have to perform an action on each button click, 
 * therefore we will be using an eventlistner property 
 * the best way to do is node.addeventListner(). 
 * But to add this event listener to each button first loop through it*/

btn.forEach( (btn) => {
    btn.addEventListener("click",() => {
        if(turn)
        {
            btn.innerText = "O";
            btn.style.color ="red";
            turn = false;
            
        }
        else{
            btn.innerText = "X";
            btn.style.color ="orange";
            turn = true;
            
        }
        //To prevent the overwritte the value in particular box once the box is clicked.
        btn.disabled = true;
        Clickcount++;

        checkWinner();
        if(Clickcount === 9)
        {
            showDraw();
        }
    } );
});

/** Here we have to create a function in order to show the winner 
 * when the particular winning pattern is matched then this function will be called
 * in order to display the message Winner on the Screen
 */

const showWinner = (winner) => {

    msg.innerText =`Congratulations, Winner is: ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes(); //To prevent remaining boxes clicking
};

/** Here we are writing a fucnction for Draw Condition */

const showDraw = () => {
     msg.innerText ="The match Is Draw !";
     msgContainer.classList.remove("hide");
    disableBoxes(); //To prevent remaining boxes clicking
};


/** Now we have to check winner of the game so we have created a function for that
 * here this function first loop through all the winning patterns we have stored inside the array
 * then we will check whether the particular pattern is matched with the winning pattern and then determine the winner of the game. */

const checkWinner = () => {

    for(let pattern of winningPattrens){

        let pos1val = btn[pattern[0]].innerText;
        let pos2val = btn[pattern[1]].innerText;
        let pos3val = btn[pattern[2]].innerText;

        if(pos1val !== "" && pos2val !== "" && pos3val !== "")
        {
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);    
            }
        }
    }
};

//To prevent the clicking of boxes when the result is shown
//To prevent Remaining Boxes Clicking

const disableBoxes = () =>{
    for( let box of btn){
        box.disabled = true;
    }
};


//To Enable the boxes once New Game or rest Game button is clicked
const enableBoxes = () =>{
    for( let box of btn){
        box.disabled = false;
        box.innerText="";
    }
};



// Creating a function to reset the game once clicked on reset button

const reset = () => {
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

//This above function will trigger when we hit newGame or reset Button

newgame.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);




