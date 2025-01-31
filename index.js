//*************************************** */ this is a basic introduction to javascript*************************************

// console.log('hello');
// console.log('i like pizza!');

// window.alert('this is an alert');
// window.alert('i like pizza');

// document.getElementById("myH1").textContent = 'hello';
// document.getElementById('myP').textContent = 'i like pizza!';

// *************************************************************************************************************************

// *************************************V A R I A B L E S******************************************************************
// variable = A container that stores the value.
// behaves as if it were the value it contains.

// 1. declaration let x;
// 2. assignment x = 100;

// let x;
// x = 100;

// let y = 123;

// console.log(x);
// console.log(y);

// let age = 25;
// let price = 10.99;
// let gpa = 9.2;

// console.log(typeof gpa)
// console.log(`you are ${age} years old`);
// console.log(`the price is ${price}`);
// console.log(`your gpa is ${gpa}`);

// S T R I N G S

// let firstname = "Rudra";
// let favfood = "pizza";
// let email = "Rudra126@gmail.com";

// console.log(typeof firstname);
// console.log(`my name is ${firstname}`);
// console.log(`my favourite food is ${favfood}`);
// console.log(`your email is ${email}`);

// B O O L E A N S

// let online = false;
// let forsale = true;
// let isStudent = true;

// console.log(`bro is online: ${online}`);
// console.log(`Is this car for sale: ${forsale}`);
// console.log(`enrolled: ${isStudent}`);

// let fullName = "Rudra Gondaliya";
// let age = 20;
// let isStudent = true;

// document.getElementById("p1").textContent = `My Name is ${fullName}`;
// document.getElementById("p2").textContent = `I am ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

// **************************************************************************************************************************

// *******************************************arithmetic operators***********************************************************

// arithmetic operators = operands( values,variables,etc.)
// operators(+,-,*,/)
// ex. 11 = x+5;

// let students = 30;
// // students = students + 1;
// students = students - 1;
// students = students *2;
// students = students /2 ;
// students = students %2;
// console.log(students);

// augmented assignment operators

// let students = 30;
// students +=1;
// students -=1;
// students *=2;
// students /=2;
// students %=2
// console.log(students);

// increament and decreament operator

// let students = 30;
// students++;
// students--;
// console.log(students);

// operator precedeence
// 1. parenthesis()
// 2.exponents
// 3.multiplication division & modulo
// 4.addition & subtraction

// // let result = 1 + 2 * 3 + 4 ** 2;
// let result = 12 % 5 + 8 / 2;

// let result = 6 / 2 ** (2 + 5);

// console.log(result);

// ****************************************************************************************************************************

//*********************************************** */ IF-ELSE STATEMENTS********************************************************
// IF STATEMENTS = if a condition is true,execute some code if not,do something else

// let age;
// age = prompt("Enter your age:");

// if(age>=18)
// {
//     document.getElementById("myAge").textContent = "You are eligible to enter this site";
// }
// else{
//     document.getElementById("myAge").textContent = "you must be 18+ to enter this site";
// }

// let isStudent = true;

// if(isStudent)
// {
//     console.log("You are a student");
// }
// else
// {
//     console.log("you are not a student");
// }

// -----------------------------------------------------Nested if-else -----------------------------------

let age = 16;
let hasLicense = true;

if(age>=18)
{
    console.log("you are old wenough to drive");

   if(hasLicense)
   {
    console.log("you have your license");
   }
   else
   {
    console.log("you do not have your license yet!");
   }
}
else{
    console.log("you must be 18+ to have a license");
}