let a = 48; 
let b = 18;

while(b>0)
{
    let temp = a % b;
    a = b;
    b = temp;
}
console.log("GCD:",a);