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


// const PI = 3.14;
// let radius;
// let circumference;

// // // radius = window.prompt('enter thr radius of a circle')
// // // radius = Number(radius);
// // // circumference = 2 * PI * radius;
// // // console.log(circumference);

// document.getElementById('mysubmit').onclick = function(){
//     radius = document.getElementById('mytext').value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius
//     document.getElementById('myh3').textContent = circumference + 'cm';
// }


// *******************************MATH****************************************
// console.log(Math.PI)
// console.log(Math.E)

// let x = 3.99;
// let y = 2;
// let z;
// z = Math.floor(x);
// z = Math.round(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(y,x);
// z = Math.sqrt(x);
//  z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.sign(x);
//  z = Math.abs(x);
// let max = Math.max(x,y,z);
// let min = Math.min(x,y,z);


// console.log(z);


// **************************** RANDOM NUMBER GENERATOR ********************************

// const max = 100;
// const min = 50


// let randomnum = Math.floor(Math.random() *max - min) + min;
// console.log(randomnum);


// *************************** if-else statements ***************************************

// let age = 15  ;

// if(age>=18){
//     console.log('you are old enough to enter this site.')
// }
// else{
//     console.log('you must be 18+ to enter this site.')
// }


// let time = 12;

// if(time <12) {
//     console.log("GOOD MORNING")
// }
// else{
//     console.log("GOOD AFTERNOON")
// }


// let isstudent = false;

// if(isstudent){
//     console.log('you are a student')
// }
// else{
//     console.log('you are not a student')
// }


// let age = 22;
// let haslicense = true;

// if(age >=18) {
//     console.log('you are old enough to drive');

//     if(haslicense) {
//         console.log('you have your license');
//     }
//     else{
//         console.log('you do not have a license');
//     }

// }
// else{
//     console.log('you are not old enough to drive yet!')
// }

// let age = 8;
// if(age >= 100){
//     console.log('you are too old to enter this site')
// }
//  else if(age >= 18){
//     console.log('you are old enough to enter this site')
// }
//   else if(age <0){
//     console.log("your age can't be below 0")
//   }

//   else if(age >=100){
//     co
//   }
// else{
//     console.log('you are not old enough to enter this site')
// 

// const mycheckbox = document.getElementById('mycheckbox');
// const mysubmit = document.getElementById('mysubmit');
// const visitbtn = document.getElementById('visitbtn');
// const mastercard = document.getElementById('mastercard');
// const paypal = document.getElementById('paypal');
// const  subresult = document.getElementById('subresult');
// const paymentresult = document.getElementById('paymentresult');

// mysubmit.onclick = function(){

//   if(mycheckbox.checked){
//     subresult.textContent = 'you are subscribed';
//   }
//   else{
//     subresult.textContent = 'you are not subscribed';
//   }

//   if(visitbtn.checked){
//     paymentresult.textContent = 'you are paying with visa';
//   }
//   else if(mastercard.checked){
//     paymentresult.textContent = 'you are paying with mastercard';
//   }
//   else if(paypal.checked){
//     paymentresult.textContent = 'you are paying with paypal';
//   }
//   else{
//     paymentresult.textContent = 'you must select a payment type!';
//   }
// }


//**************************** ternary Operator *******************************

// let age = 12;
//  let message = age >= 18 ? "you are an adult":"you are a minor";
//  console.log(message);


// let age = 22;
// let message;

// if(age >= 18){
//   message = "you are a adult";
// }

// else{
//   message = "you are a minor";
// }


// let time = 15;
// let greeting = time < 12 ? "good Moring" : "good afternoon";
// console.log(greeting)

//  let purchase = 99;
//  let discount = purachae >= 100 ? 10 : 0;
//  console.log('your total  is $${purchase - purchase * (discount/100)}')



// **************************** switch - case ********************************


// let day = 3;

// switch(day){
//   case 1: 
//       console.log('it is monday');
//       break;

//    case 2:
//     console.log('it is tuseday');   
//     break;

//     case 3:
//       console.log("it is wednesday");
//       break;

//     case 4:
//       console.log("it is thursday");
//       break;

//     case 5:
//       console.log("it is friday");
//       break;

//     case 6 :
//       console.log("it is saturday");
//       break;

//     case 7 :
//       console.log("it is sunday");
//       break;

//       default :
//          console.log("it is not a day")
// }


  //  let testscore = 24;
  //  let lettergrade;

  //  switch(true){
  //   case testscore >= 90:
  //   lettergrade = 'A';
  //   break;

  //   case testscore >= 80:
  //    lettergrade = 'B';
  //    break;
     
  //   case testscore >= 70:
  //     lettergrade = 'C';
  //     break;

      
  //   case testscore >= 60:
  //     lettergrade = 'D';
  //     break;

      
  //   case testscore >= 50:
  //     lettergrade = 'E';
  //     break;

  //     default :
  //      lettergrade = "F"
  //  }

  //  console.log(lettergrade)


  // ********************************* strings ****************************



  // let username = "rudragondaliya";

// console.log(username.charAt(4));

// console.log(username.lastIndexOf("a"));

// console.log(username.length)


// username = username.trim();
// console.log(username)


// username = username.toUpperCase();
// console.log(username)


// username = username.toLowerCase();
// console.log(username)


// username = username.repeat(3);
// console.log(username)



// let result = username.startsWith(" ");
// console.log(result);

// if(result){
//      console.log("your name can begin with '' ");
// }

// else{
//   console.log(username)
// }


// let result = username.endsWith(" ");
// console.log(result);

// if(result){
//      console.log("your name can end with '' ");
// }

// else{
//   console.log(username)
// }

// let result = username.includes(" ");
// console.log(result);

// if(result){
//      console.log("your username can't include'' ");
// }

// else{
//   console.log(username)
// }


let phone = "123-456-78899"

// phone = phone.replaceAll("-","*");
// console.log(phone)

// phone = phone.padStart(25,"0");
// console.log(phone)

phone = phone.padEnd(15,"0");
console.log(phone)