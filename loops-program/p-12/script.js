let num = 1234; 
let sum = 0;

while(num>0)
{
    sum+= num % 10;
    sum = Math.floor(num/10);
}
console.log("sum of digits:",sum);