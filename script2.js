//**Arithmetic operators
// let a = 10;
// let b = 5;

// console.log("a =",a,"& b =",b);
// console.log("a + b = ",a+b);
// console.log("a - b = ",a-b);
// console.log("a * b = ",a*b);
// console.log("a / b = ",a/b);
// console.log("a % b = ",a%b);      //mod
// console.log("a ** b = ",a**b);   //expo

// //**unary operator
// let a = 10;
// let b = 5;

// console.log("a =",a,"& b =",b);
// a = a+1;
// console.log(a);

// a++;       //post inc
// console.log(a);
// ++a;       //pre inc
// console.log(a);

// //**ssignment operators */
// b+=4;    //b=b+4
// console.log(b);    //b+=1 , b-=3, b*=3 , b/=5 , a**=6

//**comparison operators
// equal to- == , equal to and type- === , not equal- != , not equal and type- !== ,< ,<= ,> ,>=

// let a = 5;
// let b = 6;
// console.log(a==b);    //false

// a= 5;//number
// b= '7';//string->number
// console.log(a>=b);    //false

// //**logical operators
// //logical AND && , logical OR  ||, logical NOT !
// let a=6;
// let b=5;
// let cond1 = a>b; //true
// let cond2 = a===6; //true
// console.log(cond1 && cond2); //both needs true 

// let cond3 = a>b; //false
// let cond4 = a===6; //false
// console.log(cond3 || cond4); //both needs false then print true


// //**conditional stmt
// let age=22;

// if(age>24){
//     console.log("Go");
// }
// else if(age>18 && age<25){
//     console.log("yo")
// }
// else{
//     console.log("No");
// }

// //**ternary operator 
// //syntax - cond ? true output : false output
// //Ex- age > 18 ? "adult" : "not adult"

// let age=25;

// let result = age > 18 ? "adult" : "not adult"
// console.log(result);   //adult


// //**switch stmt
// const fruit = 'popat';
// switch(fruit) {
//     case 'orange':
//         console.log('we have oranges.');
//         break;
//     case 'mango':
//     case 'apple':
//         console.log('we have mangos and apples.');
//         break;
//     default:
//         console.log(`sorry we are out of ${fruit}`);


// }

// //Q1--
// let a = prompt("Enter a no:");

// if(a%5 === 0){
//     console.log("mult of 5.");
// }else{
//     console.log("not a mult of 5.")
// }


//Q2--
let a = prompt("Enter your marks : ");

if(a<=100 && a>=80){
    console.log("You are legendary.");
}else if(a<80 && a>=70){
    console.log("You are Genius.");
}else if(a<70 && a>=60){
    console.log("You are Good.");
}else if(a<60 && a>=50){
    console.log("No do some hard work bro.");
}else if (a<50 && a>=40) {
    console.log("Bro think about your parents.");
}else {
    console.log("Shame on you,fuck you bro");
}
