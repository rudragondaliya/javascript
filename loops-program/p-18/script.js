let num = 153;
let sum = 0;
let temp = num;

while(temp>0)
{
    let digit = temp %10;
    sum += digit ** 3;
    temp = Math.floor(temp/10);
}
console.log("Num is armstrong number:",sum === num);