//here we are learning how the events are being used in js
//in html document we have created an element button with id = btn
//First we have to access that element using querySelector
//Then we will applied the event defination

const btn = document.querySelector("#btn");

/**btn.onclick = () => {
    console.log("Button was Clicked !");
    let a = 20;
    a++;
   return a;   
}*/
let bgcolor = "light";
const mode = btn.addEventListener("click", () => {
if(bgcolor === "light")
    {
    bgcolor = "dark";
    console.log("dark");
    document.querySelector("body").style.backgroundColor="black";
}
else{
    bgcolor = "light";
    console.log("light");

    document.querySelector("body").style.backgroundColor="white";
}

})

