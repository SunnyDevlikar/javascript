const prompt = require("prompt-sync")();
let num = 5;
let usernum = prompt("Guess a number");

while(usernum != num)
{
    if(usernum < num)
    {
        alert("Too Low");
    }
    else if (usernum > num)
    {
        alert("Too High");
    }
    usernum = prompt("You have entered incoorect number , Try again");

}
alert("correct");