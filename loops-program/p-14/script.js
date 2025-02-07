let num = prompt("Enter the number:");
let isPrime = true;
let i;
for(i = 2;i<Math.sqrt(num);i++)
{
    if(num % i == 0)
    {
        isPrime = false;
        break;
    }
}
console.log(num, "is Prime:", isPrime)