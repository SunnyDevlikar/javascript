let h1 = document.querySelector("h1");
console.dir(h1);
//apped.textContent = apped.textContent + 'from Sunny Devlikar';

console.dir(h1.innerText);
h1.innerText = h1.innerText + " From Sunny devlikar";

let h2 = document.querySelector("h1");
h2.textContent = h2.textContent + " From Sunny devlikar";
console.dir(h2.textContent);

let h3 = document.querySelector("h1");
h3.innerHTML = h3.innerHTML + " From Sunny devlikar";

console.dir(h3.innerHTML);

let box = document.querySelectorAll(".box");
console.log(box);
/**box[0].innerText = "Sunny";
console.log(box[0].innerText);
box[1].innerText = "Bhanudas";
console.log(box[1].innerText);
box[2].innerText = "Devlikar";
console.log(box[2].innerText);
*/
let id =1;
for(boxs of box)
{
    console.log(boxs.innerHTML = `The value is ${id}`);
    id++;
}

//here we have used getattribute property which basically returns the value of the attribute.

let para = document.querySelector("h1");
console.log(para);

let attr = para.getAttribute("id");
console.log(attr);

//To set or chnage the attribute value we have to use setAttribute property

let ne = document.querySelector("p");
//console.log(ne.setAttribute("class", "newClass"));


// Now we are accesing the style with javascript. here first we have applied styling to the html element "div"

let styl = document.querySelector("div");
console.log(styl);

//chnaging the background color of the div elemnet using 
styl.style.backgroundColor="yellow";

//Now we are Inserting Elements to webpage using JavaScript
// The first step is to create a new Element first  using ".createElement()" method
// then we have to append that newly created element in order to show it on screen in case that new element is a button or something else.

let btn = document.createElement("button");

//lets give a name to the created button as "Click me"
btn.innerText= "Click Me";
btn.style.backgroundColor="red";
btn.style.color="white";


//Now the qurstion is that we have to place this button somewhere on the webpage where we can see  it.
//lets add this button either inside or outside to div tag

let dish = document.querySelector("body");
dish.prepend(btn);

//here we have to append another class to the paragraph tag, if we use setAttribute property then the previously applied class is removed.
//Therefore we cannpot use the setAttribute() 
// in order to append the class or html element to have more than one class we have to use classList.

let par = document.querySelector("p");
par.getAttribute("class");
//par.setAttribute("class", "cla");

//to add class use element.classList.add("newClassName")
//to remove class use element.classList.remove("ClassName")
//to toggle class use element.classList.toggle("newClassName")

par.classList.add("cla");