const mybutton = document.getElementById('mybutton');
const mylabell  = document.getElementById('mylabel1');
const mylabel2  = document.getElementById('mylabel2');
const mylabel3  = document.getElementById('mylabel3');
let randomnum1;
let randomnum2;
let randomnum3;
let min = 1;
let max = 6;

mybutton.onclick = function(){
  let randomnum1= Math.floor(Math.random() * max) + min;
  let randomnum2= Math.floor(Math.random() * max) + min;
  let randomnum3= Math.floor(Math.random() * max) + min;
  mylabel1.textContent = randomnum1;
  mylabel2.textContent = randomnum2;
  mylabel3.textContent = randomnum3;
}