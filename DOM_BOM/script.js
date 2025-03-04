// document.getElementById("id")
// let header = document.getElementById('title');
// console.log(header.textContent = "Rudra");

// document.getElementsByClassName("class")
// let items = document.getElementsByClassName("myP");
// console.log(items.textContent);


// document.getElementsByTagName("tag")
// let data = document.getElementsByTagName('h2');
// console.log(data.length);

// document.querySelector("selector")

// let data = document.querySelector("#data");
// data.style.color = 'blue';

// document.querySelectorAll("selector")
let data = document.querySelectorAll("#data");
data.forEach(item => item.style.color = "red");