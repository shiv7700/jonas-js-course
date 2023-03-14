/*
let js = "learning";
if(js==="learning") alert("yes learning js")

console.log(20+42+52);

let myName = "shivang";
console.log(myName); 

let booleanValue = true;
console.log(booleanValue);

console.log(typeof true);
console.log(typeof 10);
console.log(typeof "string");
console.log(typeof booleanValue);

console.log(typeof null);

const PI = 22.7;

var a=10;

console.log(10+2);
console.log(10-2);
console.log(10/2);
console.log(10%2);
console.log(10**2);
console.log("shivang" + " " + "ramola");


let markHeight;
let markMass;

let johnHeight;
let johnMass;

markHeight=1.69;
markMass=78;
johnHeight=1.76;
johnMass=92;

let markBmi= markMass / markHeight ** 2;
let johnBmi= johnMass / johnHeight ** 2;

console.log(markBmi,johnBmi);

const markBmiHigher= (markBmi>johnBmi);

console.log(markBmiHigher);

let string=`this is a string ${2+2}`;
console.log(string);
let newString="this is also a string";


const age=18;

if(age>=18){
    console.log("true");
} else {
    console.log("false");
}


let a="10";
let b=Number(a);
let c=String(b);


true and false values
false values = 0 " " undefined null NaN


let dolphinsRoundOne=96;
let dolphinsRoundTwo=96;
let dolphinsRoundThree=96;

const dolphinsAverage=(dolphinsRoundOne+dolphinsRoundTwo+dolphinsRoundThree)/3;

let koalasRoundOne=88;
let koalasRoundTwo=88;
let koalasRoundThree=88;

const koalasAverage=(koalasRoundOne+koalasRoundTwo+koalasRoundThree)/2;

if(dolphinsAverage===koalasAverage){
    console.log(`draw`);
} else if(dolphinsAverage>koalasAverage) {
    console.log(`dophins wins`);
} else {
    console.log(`koalas wins`);
}


let day = "tuesday";

switch(day){
    case "monday" :     console.log("today is monday");
    break;
    case "tuesday" :    console.log("today is tuesday");
    break;
    case "wednesday" :  console.log("today is wednesday");
    break;
    case "thursday" :   console.log("today is thursday");
    break;
    case "friday" :     console.log("today is friday");
    break;
    case "saturday" :   console.log("today is saturday");
    break;
    case "sunday" :     console.log("today is sunday");
    break;
}


// ternay operator

const age = 18;

const wineOrNot = age>=20 ? a : b;
console.log(wineOrNot);

*/

const bill = 500;
let tip = (bill>=50 && bill<=300) ? (bill*0.15) : (bill*0.2);

console.log(`${tip}`);
console.log(`${bill+tip}`);

