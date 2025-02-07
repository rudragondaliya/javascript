let a = 12 , b = 15 , lcm = (a*b)/gcd(a,b)
function gcd(x,y)
{
    while(y!==0)
    {
        let temp = y 
        y = x % y;
        x = temp;
    }
     return x;

}
console.log("LCM:",lcm);