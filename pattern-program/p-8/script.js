//  Fibonacci series
let a = 0, b = 1;
let temp;
console.log(a);
console.log(b);
for(let i=2;i<=11;i++)
{
    temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
}