/*
//--for loop
//for(initialize ; stopping cond ; updation){ code }
//print 1 to 5
for(let i=1;i<100;++i){
    console.log("It'z RK...")
}
console.log("loop ended...")
*/
/*
//sum of 1 to 5
let sum = 0;
for(let i=1; i<=5; i++){
    sum += i;
};

console.log("sum : ",sum)
console.log("thats the sum...")

for(var i=0;i<6;i++){     //var is global var
    console.log("i :", i);
}
console.log(i);

//--infinite loop
for(let i=0;i<=5;i++){
console.log(i);
}
*/
/*
//--while loop
//while (stopping cond){ code; updation; };
let i =1 ;
while(i<=5){
    console.log('i : ',i);
    i++;
}
*/

/*
//--do -while loop    //at least 1 run
//do{ code }while (cond);
let i = 20;
do{
    console.log('i = ',i);
    i++;
}while (i<=10);
*/

/*
//--for-of loop
//for(let val of strVar){ code };
let str = 'hello RK';
length = 0;
for (let i of str){     //iterator
    console.log(i);
    length++;
};
console.log(length);
*/

/*
//--for-in loop
let stud = {
    name : "rohit",
    age : 20,
    cgpa : 5.5
};

for (let key in stud){
    console.log("key : ",key, "value : ",stud[key] );
}
*/


/*
//Q. print all numbers from 0 to 100
// for(let i=0;i<=100;i++){
//     console.log(i)
// }

// let i = 0;
// // while(i<=100){
// //     console.log(i);
// //     i++;
// // }

// do {
//     console.log(i);
//     i++;
// }
// while(i<=100);
*/

/*
//Q1. print all even numbers from 0 to 100
for(let i = 0;i <= 100; i++){
    if(i%2!==0){
    console.log('i : ',i);
    }else{

    }
};
*/

//Q2. create a game where you start with any random game no.Ask the user to keep guessing game no until user enters correct no.
let no = 27;
let i = prompt("Guess the game no : ");


while(i!= no){
    i = prompt("You entered wrong no... Try again : ")
}
console.log("Congrats right guess...")





