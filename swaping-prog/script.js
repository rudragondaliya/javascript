// Wap to swap numbers using third variable

let a = 10;
let b = 20;
let c = 30;
let d = 50;
let temp;

console.log("Before swapping numbers");
console.log("the a value of a:",a);
console.log("the a value of a:",b);
console.log("the a value of c:",c);
console.log("the a value of d:",d);

// using third variable
temp = a;
a = b;
b = temp;

// without using third variable
c = c + d;
d = c - d;
c = c - d;


console.log("after Swapping numbers");
console.log("the value of a:",a);
console.log("the value of b:",b);
console.log("the value of c:",c);
console.log("the value of d:",d);





