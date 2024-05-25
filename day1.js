// ***********************************basics *********************************************************

//console.log('hello');
// console.log('i like pizza');

// window.alert('this is an alert');
// window.alert('i like pizza!');

// ************************************** comments ***************************************************

// this is a comment


// document.getElementById("myh1").textContent = 'HELLO';
// document.getElementById("myp").textContent = 'i like pizza!';

// *********************************************** variables ************************************************

// let x = 200;
// console.log(x);

// let age = 25;
// console.log(age);

// let price = 10;
// let gpa = 2.1;
// console.log(gpa);

// console.log(typeof gpa)
// console.log("you are ${age} years old")

// ************************************************* strings **************************************************

// let firstname = 'rudra';
// let email = 'rudra@gmai.com';
// let food = 'pizza';

// console.log(firstname)
// console.log(email)
// console.log(food)
// console.log(typeof firstname)

//************************************************  boolean ********************************************************


// let online = true;
// let forsale = false;
// let student = true;

// console.log(typeof online);
// console.log('rudra is online: ${online}')



// let name = 'RUDRA GONDALIYA'
// let age = 19;
// let qualifation = 'FULL STACK DEVELOPER'
// let married = false;


// document.getElementById("p1").textContent = name;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = qualifation;
// document.getElementById("p4").textContent = married;


// ************************************** arithmetic operators ***********************************************

//  students = students +1;
//  students = students -2;
//  students = students *2;
//  students = students /2;
//  students = students **2;
//  let  extrastudents = students %2;


// let students = 30;
// students = students += 2;
// students = students -= 2;
// students = students *= 2;
// students = students /= 2;
// students = students **=2;
// students = students %= 2;

// students++;
// students--;


// console.log(students);


// let username;

// username = window.prompt('whats your username?');

// console.log(username )

// let username

// document.getElementById('mysubmit').onclick = function(){
//     username = document.getElementById('mytext').value
//     document.getElementById(myh1).textContent = 'hello ${username}'
// }


//  let age = window .prompt("How old are you?");
//  age = Number(age)
//  age+=1;
//  console.log(age, typeof age)

// let x = '0';
// let y = '0';
// let z = '0';

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z)

// let x = '';
// let y = '';
// let z = '';

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z)

// let x ;
// let y ;
// let z ;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z)

//************************************** */ write a program to calculate the circumstances of a circle ......

// const PI = 3.14;
// let radius;
// let circumference;

// // radius = window.prompt('enter the radius of a circle');
// // radius = Number(radius);

// // circumference = 2 * PI * radius;

// // console.log(circumference);


// document.getElementById('mysubmit').onclick = function(){
//  radius = document.getElementById('mytext').value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
// document.getElementById('myh3').textContent = circumference;
// }


const PI = 3.14;
let radius;
let circumference;

// // radius = window.prompt('enter thr radius of a circle')
// // radius = Number(radius);
// // circumference = 2 * PI * radius;
// // console.log(circumference);

document.getElementById('mysubmit').onclick = function(){
    radius = document.getElementById('mytext').value;
    radius = Number(radius);
    circumference = 2 * PI * radius
    document.getElementById('myh3').textContent = circumference + 'cm';
}

