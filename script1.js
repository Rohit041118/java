//variables
// isok =true;
// console.log(isok);

// rk = 100;
// console.log(rk);

// num=99.99;
// console.log("num");

//variable rules
/*
1.Variable names are case sensitive; "a" & "A" is different.
2.Only letters, digits, underscore(_) and $ is allowed. (not even space)
3.Only a letter, underscore() or $ should be 1st character.
4.Reserved words cannot be variable names.
For example, you cannot use "var", "let", "if", "for", etc. as variable names.
*/
/*
#let, const & var
var: Variable can be re-declared & updated. A global scope variable.
let: Variable cannot be re-declared but can be updated. A block scope variable.
const: Variable cannot be re-declared or updated. A block scope variable.
*/

// var a=10;
// console.log(a);
// {
//     let a=15;
//     console.log(a);
// }
// {
//     const a=20;
//     console.log(a);
// }
// //const a=19;           //error here cuz i took same identifier 'a' in both let and var.
// //console.log(a);

// /*
// Data Types in JS
// Number, String, Boolean, Undefined, Null, BigInt, Symbol
// */
// let no = 99;
// console.log(no);
// console.log(typeof(no));

// let yo="Hello RK...";
// console.log(yo);
// console.log(typeof(yo));

// isok =false;
// console.log(isok);
// console.log(typeof(isok));

// let r;
// console.log(r);
// console.log(typeof(r));

// let x=null;
// console.log(x);
// console.log(typeof(x));

// let y=BigInt("1234");
// console.log(y);
// console.log(typeof(BigInt));

// let z=Symbol("hyo")
// console.log(z);
// console.log(typeof(z));

const stud = {
    name: "Rohit",
    age: 20,
    branch: "CSE",
    college: "KBT",
    ispass: true
};                                  //here cons stud is an object and we can change values inside it but we cannot change values of normal const function.
console.log(stud["college"]);
console.log(stud.age);

stud["age"] = stud["age"] + 4;
console.log(stud.age);

stud.name="RK";
console.log(stud.name);