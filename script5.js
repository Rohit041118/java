/*
//--Functions           //Prevents redundancy.
//Block of code performs specific task, can be invoked whenever needed.
//Function Def - 
//function funcName(param1, param2, ....){
//     body
//}
//Function Call - 
//functionName();

function rk(){
    console.log("He is RK...");
    console.log("Nope i am RK...");
}
rk();    //function invoked.
// rk();

function rks(msg){  //parameter -> input in function
    console.log(msg);
}
rks("I love star...");   //argument

function add(a,b){
    console.log(a+b);
}
add(10,20);

function sum(x,y){ 
    s = x + y;
    console.log(x);    ///func params -> local vars of functions and have block scope of that function
    return s;
    
}
let val = sum(5,6);
console.log(val);
*/
/*
//--Arrow Functions   //compact way of writing a function.
//const functionName = (param1,param2,...)=>{
//   body
//}

function sum(a,b){
    return a + b;
}

const ArrowSum = (a,b) => {
    console.log(a + b);
};

function mult(a,b){
    return a*b;
}

const arrowMult = (a,b) => {
    return a*b;
}

const print = () =>{
    console.log("Print");
}
*/
/*
//Q. Create a function using "function" keyword that takes a string as an argument and returns no of vowels in the string.
function str(string){
    let count = 0;
    for(const char of string){
        if(char === "a" || char === "e" || char === "i"|| char === "o"|| char === "u")  {
            count++;
        }  
    }    
    console.log("Number of Vowels : ",count);
}
str("i love strings...");

//Q. Create an arrow function to perform the same task.
function str(string){
    console.log(string);
}
const countvow = (string) =>{
    let count = 0;
    for(const char of string){
        if(char === "a" || char === "e" || char === "i"|| char === "o"|| char === "u")  {
            count++;
        }  
    }    
    console.log("Number of Vowels : ",count);
}
countvow("i love star...");
*/
/*
//--forEach loop in arrays
//arr.forEach(callBackFunction)
//callBackFunction : a function to execute for each element in the array.
//arr.forEach((val) => {
//   console.log(val);
// })

// let arr = [1,2,3,4,5];

// arr.forEach(function printVal(val){
//     console.log(val);
// });

let arr =["pune","mumbai","delhi"];

arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
});
*/
//Higher oredr function - the functions that take another function as their parameter inside them or they write another function as their output.
/*
//Q. for given array of no ,print the square of each value using forEach loop.

let arr= [1,2,3,4,5];

arr.forEach((sq) => {
    console.log(sq * sq);
});

//OR

let calcsq = (num) => {
    console.log(num*num);

};
arr.forEach(calcsq);
*/
/*
//--Map   creates a new array with results of some operation. the value its callback returns are used to form new array.
//arr.map (callbackFnx(value,index,array))
//let newArr = arr.map ((val) => {
//    return val*2;
//})
let arr= [1,2,3,4,5];

let newArr = arr.map((sq) => {
    return sq * sq;
});
console.log(newArr);
*/

/*
//--Filter creates a new array of elements that give true for a condition/filter.
//let newArr = arr.filter ((val)=>{
//     return val%2 == 0;
// })
let arr = [1,2,3,4,5,6,7];
let oddArr= arr.filter((val)=>{
    return val %2 !==0;
});
console.log(oddArr);
*/
/*
//--reduce  performs some operations and reduces the array to a single value. it returns that single value.
// let arr = [1,2,3,4,5,6,7];

// const output = arr.reduce((res,curr) => {
//     return res + curr;
// });
// console.log(output);   //28

//to print out largest no in the array.
let arr = [1,2,3,4,5,6,7];

const output = arr.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
});
console.log(output);
*/
/*
//Q1. We are given array of marks of students. Filter out of the marks of students that scored 90+. 
let arr = [89,99,67,45,98,91,23,9,90];

let score = arr.filter((val)=>{
    return val > 90;
});
console.log("Marks >90 ",score);
*/

//Q2. Take a number n as input from user.Create an array of no from 1 to n.Use the reduce method to calculate sum of all numbers in the array.Use the reduce method to calculate product of all numbers in the array.

let n = prompt("Enter a number : ");

let arr = [];

for (let i=1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr);

const sum = arr.reduce((res,curr) => {
    return res + curr;
}) 
console.log("Sum is : ",sum);

const product = arr.reduce((res,curr) => {
    return res * curr;
}) 
console.log("Product is : ",product);


