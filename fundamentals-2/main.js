// "use strict";
/*


//function
function myFirstFunction(){
    console.log("this is my first function");
}

myFirstFunction();
function twoLang(python,js){
    console.log(python,js);
    const hours = `python is ${python} and js is ${js}`;
    return hours;
}

let result = twoLang(2,5);
console.log(result);

function findAge(enterYear){
    return 2023-enterYear;
}

const result = findAge(1998);
console.log(result);

const anotherAge = function (enterYear){
    return 2023-enterYear;
}

console.log(anotherAge(2000));
//arrow function

const ageFinder = birthYear => 2023-birthYear;
console.log(ageFinder(2000));

const whatName = year => {
    const random=year+1;
    return random;
}

console.log(whatName(2023));
//function calling another function
function doit(ho){
    return ho*2;
}

function langPerHours(a,b){
    const d = doit(a);
    const e = doit(b);
    return `${d} ${e}`;
}
console.log(langPerHours(1,1));


//arrays
const langs = ["javascript","python","html"];
console.log(langs);

const newlangs = new Array("javascript","python","html");
console.log(newlangs);

console.log(langs[0]);
console.log(langs[1]);
console.log(langs[2]);

//length of array
console.log(langs.length);
console.log(langs[langs.length-1]);

langs[2] = "java";
console.log(langs);

//one array inside another array
const tryAnother = ["javascript" , 0 , true , langs];
console.log(tryAnother);

const age = function (year){
    return 2023-year;
}

const students = [2000,2003,2004,2001];

console.table(age(students[0]) , age(students[1]) , age(students[2]) , age(students[3]));

//array methods
const lang =["js","python"]
lang.push("java");
console.log(lang);

lang.unshift("c++");
console.log(lang);

lang.pop();
console.log(lang);

lang.shift();
console.log(lang);

console.log(lang.indexOf("js"));
console.log(lang.includes("js"));

//objects
const shivang = {
    name: "shivang",
    job: "front-end",
    language: "javascript"
};
console.log(shivang);

console.log(shivang.name);
console.log(shivang["name"]);

// const key = prompt("tell me your?");
// console.log(shivang[key]);

shivang.newProperty = "new";
console.log(shivang);

shivang["anotherNew"] = "new";
console.log(shivang);

const shivang = {
    name: "shivang",
    job: "front-end",
    language: "javascript",
    year: 2000,
    // calAge: function(year){
        //     return 2023-year;
        // }
        // calAge: function(){
            //     return 2023-this.year;
            // }
            calAge: function(){
        shivang.age= 2023 - shivang.year;
        return shivang.age;
    }
};

// console.log(shivang.calAge(2000));
// console.log(shivang["calAge"](2000));
// console.log(shivang.calAge());
//this keyword is current object
shivang.calAge();
console.log(shivang.age);

//loops

for(let i=1; i<=10; i=i+1){
    console.log(`this is number ${i}`);
}

const lang = ["javascript","css","html","python"];

for(let i=0; i<lang.length; i++){
    console.log(`${lang[i]}`);
} 

const years = [2000,1995,1990,2003];
const age = [];

for(let i=0; i<years.length; i++){
    //age[i] = 2023 - years[i]; 
    age.push(2023 - years[i]);
}

console.log(age);
const lang = ["javascript","css","html","python"];

for(let i=0; i<lang.length; i++){
    if(i==2) break;
    console.log(`${lang[i]}`);
} 

const years = [2015,2018,2019,2011];

for(let i = years.length - 1; i>=0; i--){
    console.log(years[i],i);
}
*/

for(let i = 1; i <= 3; i++){
    console.log(`day ${i}`);
    
    for(let j=1; j<=5; j++){
        console.log(`learning ${j}`);
    }
}

let randomNumber = 1;
while(randomNumber <= 10){
    console.log(`${randomNumber}`);
    randomNumber++;
}