//DOM- Part 2
//Attribbutes
//getAttribute(attr)      //to get the attribute value
//setAttribute(attr,value)     //to set attribute value

// let box = document.querySelector("div");
// console.log(box.getAttribute("class"));

// console.log(box.setAttribute("class","newclass"));

//style -- node.style
let div = document.querySelector("div");

div.style.backgroundColor = "red";
div.style.boxShadow = "10px 10px grey";

div.innerText = " RK..."





// DOM Manipulation
// Insert Elements
// let el = document.createElement("div")
// 
// node.append(el) //adds at the end of node (inside)
// node.prepend(el) lladds at the start of node (inside)
// node.before(el) //adds before the node (outside)
// node.after(el) lladds after the node (outside)
//
// Delete Element
// node.remove() //removes the node

let btn = document.createElement("Button");
btn.innerText = "Fuck me!";
console.log(btn);
div.before(btn);
// div.after(btn);

let newheading = document.createElement("h1");
newheading.innerHTML ="<i>Hi i am new...</i> ";

document.querySelector("body").prepend(newheading);

newheading.remove();
