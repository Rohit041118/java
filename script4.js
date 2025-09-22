/*
//--Arrays   //array is basically a object in js.
let marks = [99,65,44,32,45,56,76,86,12];

console.log(marks);
console.log(marks[3]);
marks[3] = 99;
console.log(marks[3]);
console.log(marks.length);  ///property

let heroes = ["hulk", "dr strange","cap america", "spider man","ant man"];
console.log(heroes);
*/
/*
//--looping over an array
let heroes = ["hulk", "dr strange","cap america", "spider man","ant man"];

for( let ind= 0;ind<heroes.length;ind++){
    console.log(heroes[ind]);
    
}

//for-of
for(let hero of heroes){
    console.log(hero.toUpperCase());
}
*/
/*
//--Q. For given array with marks of stud -> [85,97,44,37,76,60]Find avg marks of entire class.
let marks = [85,97,44,37,76,60];

let sum = 0;
for ( let mark of marks){
    sum=sum+mark;
}
console.log("Avg is : "+sum/marks.length);

//Q. For a given array with pieces of 5 items ->[250,645,300,900,50] all items have an offer of 10% off on them.Change the array to store final price after applying offer.
let mrp = [250,645,300,900,50];

for( let i=0; i<mrp.length;i++){
    console.log("Final Price of every item is : "+mrp[i]*0.90);
}
*/

/*
//--Array Methods
//push(): add to end
//pop(): delete from end and return
//toString: converts array to string
let veg =["potato","tomato","gajar","bhindi","karle"];

veg.push("cabbage");
console.log(veg);

let del = veg.pop();
console.log(veg);
console.log("Deleted item is : "+del);

veg.toString();
console.log(veg);
*/
/*
//concat() : joins multiple arrays & returns result
//unshift() : add to start
//shift() : delete from start and return
let marvel = ["thor","mjolnir","stormbreaker"];
let dc = ["robin","raven","superman"];
let ind = ["shaktiman","goku","krish"];


let heroes = marvel.concat(dc,ind);
console.log(heroes);

let marvel = ["thor","mjolnir","stormbreaker"];
let val = marvel.unshift();

console.log(val);

let dc = ["robin","raven","superman"];
let bc = dc.shift();
console.log(bc);
*/
/*
//slice(startidx,endidx) : returns piece of array
//splice(startidx,delCount,newEl1...) : change original array (add,remove,replace)
let dc = ["robin","raven","superman","thor","flash","batman"];

console.log(dc);
console.log(dc.slice(1,5));

let arr = [1,2,3,4,5,6,7,8,9];
//arr.splice(3,4,99,100,101,34,20);
//console.log(arr);
arr.splice(2,0,101);
console.log(arr);
*/

//Q1. Create an array to store companies -> "bloomberg","microsoft","uber","google","ibm",netflix.
//a. remove first company from the array
//b. remove uber and add ola in its place
//c. add amazon in the last of array

let companies = ["bloomberg","microsoft","uber","google","ibm","netflix"];
// console.log(companies);
//a.
companies.shift();
console.log(companies);

//b.
companies.splice(2,1,"ola");
console.log(companies);

//c.
companies.push("amazon");
console.log(companies);







