let num = 8375;
 let maxDigit = 0;
while(num>0)
{
    let digit = num % 10;
    if(digit>maxDigit) maxDigit = digit;
    num = Math.floor(num/10);
}
console.log("largest digit:",maxDigit);
