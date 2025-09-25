// //DOM - Document Object Model
// //Selecting with ID
// //document.getElementById("myid")

// let heading = document.getElementById("heading");
// console.dir(heading);

// //Selecting with class
// //document.getElementsByClassName("myclass")

// let para = document.getElementsByClassName("para");
// console.dir(para);
// console.log(para);

// //Selecting with Tag
// //document.getElementByTagName("mytag")

// let par = document.getElementsByTagName("p");
// console.dir(par);
// console.log(par);


// //Query Selector
// //document.querySelector("myid/myclass/tag")    - returns first element
// //document.querySelectorAll("myid/myclass/tag")  - returns a nodelist

// let firstelement = document.querySelector("p");
// console.dir(firstelement);
// let allelements = document.querySelectorAll("p");
// console.dir(allelements);


// // DOM Manipulation
// // Properties
// // tagName: returns tag for element nodes
// // innerText: returns the text content of the element and all its children
// // innerHTML: returns the plain text or HTML contents in the element
// // textContent: returns textual content even for hidden elements

// console.log(firstelement.tagName);

// let div = document.querySelector("div");
// console.dir(div);
// console.log(div.innerText);

// let h3 = document.querySelector("h3");
// console.dir(h3);
// console.log(h3.textContent);


//Q1. Create a h2 heading with text "Hello JavaScript".Append "from KBTCOE students..."to this text using JS.

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from KBTCOE students..."
// console.dir(h2.innerText);

//Q2. Create a 3 divs with common class name "box".Access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");
divs[0].innerText = "New val 1..."
divs[1].innerText = "New val 2..."
divs[2].innerText = "New val 3..."

