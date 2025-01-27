// CONSTANTS = a variable that can't be changed.

// 1.first way

// const PI = 3.14;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius:");
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log(circumference);

// 2.second-way

const PI = 3.14;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference;
}

