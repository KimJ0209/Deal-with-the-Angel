/* Declare variables below to save the different sections (divs) of your story*/
let body = document.querySelector("body");
let title = document.querySelector(".title");
let opening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let buttonOne = document.querySelector(".option-one");
let buttonTwo = document.querySelector(".option-two");
let optionOne = document.querySelector(".option-one-screen");
let optionTwo = document.querySelector(".option-two-screen");
let buttonThree = document.querySelector (".option-three");
let buttonFour = document.querySelector (".option-Four");
let optionThree = document.querySelector(".option-three-screen");
let optionOneImg = document.querySelector(".option-one-img");
let optionOneEnd = document.querySelector(".option-one-end");

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables! */

buttonOne.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionOne.style.display = "block";
    title.innerHTML = "Stay where your at";
};

buttonTwo.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionTwo.style.display = "block";
    title.innerHTML = "Run away";
};

buttonThree.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionTwo.style.display = "block";
    title.innerHTML = "if you choose Yes";
};