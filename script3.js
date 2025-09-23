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
/*
//Q2. create a game where you start with any random game no.Ask the user to keep guessing game no until user enters correct no.
let no = 27;
let i = prompt("Guess the game no : ");


while(i!= no){
    i = prompt("You entered wrong no... Try again : ")
}
console.log("Congrats right guess...")
*/
/*
//--Strings    //\n-next line, \t- tab space
let str = "Hello There RK...";
console.log(str[15]);
console.log(str.length);

//--Template Literals
let specialstr = `This is special string...`
console.log(typeof specialstr);

let Object={
    item : "pen",
    price : 10
};

let output = `The cost of ${Object.item} is ${Object.price} Rs...`;

console.log(output);
*/
/*
//--String Methods
//str.toUpperCase & str.toLowercase   //converts full str to upper case.
let str = "Hello Star...";
console.log(str);
let newstr = str.toUpperCase();
console.log(newstr);
let new1str = str.toLowerCase();
console.log(new1str);

//str.trim()    //removes white from spaces starting and ending of str.
let  a = "       Hello Shooting star...      " 
console.log(a.trim());

//str.slice(start,end?)      ///returns part of str.
let str2 = "Hello RK how are you?"

console.log(str2.slice(2,15));

//str1.concat(str2)    ///joins str2 with str1.
let str3 = "Hello";
let str4 = "RK...";
result = str3.concat(str4);
console.log(result);
res = str3 + str4;
console.log(res);

//srt.replace(searchVal, newVal)
let str5 = "Yello."
console.log(str5.replace("Y","H"));

//str.charAt(idx)
let str6 = "No way!";
console.log(str6.charAt(6));
*/

//Q1. prompt user to enter full name. generate username for the user based on input.start username with@, followed by their full name ans ending with fullname length.
let str = prompt("Enter your full name : ");

console.log("@"+str+str.length);









