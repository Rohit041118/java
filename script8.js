// Events in JS
// The change in the state of an object is known as an Event
// Events are fired to notify code of "interesting changes" that may affect code execution.
// Mouse events (click, double click etc.)
// Keyboard events (keypress, keyup, keydown)
// Form events (submit etc.)
// Print event & many more

// Event Handling in JS
// node.event = () => {
// //handle here
// }

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("I was Fucked..");
//     let a = 25;
//     a++;
//     console.log(a); //26

// }


// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log("You Naughty Naughty...");

// }

//Priority  inline << js

// Event Object
// It is a special object that has details about the event.
// 0
// All event handlers have access to the Event Object's properties and methods.
// node.event = (e) => {
// //handle here
// }
// e.target, e.type, e.clientX, e.clientY

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
    

// }

// let div = document.querySelector("div");

// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// }

// Event Listeners
// node.addEventListener(event, callback)
// node.removeEventListener(event, callback)
// *Note: the callback reference should be same to remove

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click",() =>{
//     console.log("I was Fucked...");
// });

// btn1.addEventListener("click",(evt) =>{
//     console.log("I was Fucked Twice...");
//     console.log(evt);
//     console.log(evt.type);

// });



// const thrice = () => {
//     console.log("I was Fucked Thrice...");
// };


// btn1.addEventListener("click",() =>{
//     console.log("I was Fucked Friece...");
// });

// btn1.removeEventListener("click",() => {
//     console.log("I was Fucked Thrice...");
// });

// btn1.removeEventListener("click",thrice);

//Q. Create a toggle button that changes screen to dark mode when clicked and light mode when clicked again.

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () =>{
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add ("dark");
        body.classList.remove ("light");

    }else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove ("dark");
       
    }
    console.log(currMode);

});


// let onhover = document.querySelector ("#hover");
// let body = document.querySelector("body");
// let currMode = "light";

// onhover.addEventListener("mouseover", () => {
//     if(currMode === "light"){
//         currMode = "dark";
//         body.classList.add ("dark");
//         body.classList.remove ("light");

//     }else {
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove ("dark"); 
//     }
//     console.log(currMode);
// });

let hoverEle = document.querySelector("#hover");

hoverEle.addEventListener("mouseover", () => {
    body.classList.add("dark");
    body.classList.remove("light");
    console.log("Mouse entered: Dark mode ON");
});

hoverEle.addEventListener("mouseout", () => {
    body.classList.add("light");
    body.classList.remove("dark");
    console.log("Mouse left: Light mode ON");
});
