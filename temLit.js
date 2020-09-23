
// Name:Jorge Collazo
// Date:9-23-2020
// Assignment: Template Literal Practice

////////////////////////Pt. 1////////////////////////
// create a var that accepts a first name as a prompt

//let firstName = prompt("please enter your first name");
let firstName = prompt(`please enter your first name`);
firstName;

// create a var that accepts a last name as a prompt

//let lastName = prompt("please enter your last name");
let lastName = prompt(`please enter your last name`);
lastName;

// Create a variable that will hold a score and a var that will hold a full name 

//let score = 0;
let score = `${0}`;

//let fullName = firstName + " " + lastName;
let fullName = `${firstName}  ${lastName}`;
fullName;

// create a var that adds the full name var and score in a message

//let highscore = fullName + " " + "has a score of " + score;
let highscore = `${fullName} has a score of ${score}`;
highscore;

////////////////////////Pt. 2////////////////////////
//comment out the lines above then create two var's that hold numbers

//let num1 = 2;
let num1 = `${2}`;
//let num2 = 1;
let num2 = `${1}`;
num1;
num2;

//create an add var that adds both vars

//let sum = num1 + num2;
let sum = `${num1} ${num2}`;
sum;

//console log the newly created add var

//console.log("sum");
console.log(`sum`);

//console log 3 string's using concatination that say "concatinating is easy""when using template literals,""I can even embed numbers and not have to worry about spacing!"

//console.log("concatinating is easy" + " when using template literals," + " I can even embed numbers and not have to worry about spacing!")
console.log(`concatinating is easy when using template literals, I can even embed numbers and not have to worry about spacing!`)

//console log the three strings above and add a third string that includes the add var

//console.log("concatinating is easy" + " when using template literals," + " I can even embed numbers and not have to worry about spacing! " + sum)
console.log(`concatinating is easy when using template literals, I can even embed numbers and not have to worry about spacing! ${sum}`)
