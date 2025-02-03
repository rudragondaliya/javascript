// Program 3: Check if a number is divisible by both 3 and 5 using nested if

let value = prompt("enter the value:");

if(value % 3 == 0)
{
    if(value % 5 == 0)
    {
        document.write( value ," is divisible by both 3 and 5");
    }
    else
    {
        document.write(value," is divisible by 3 but not by 5");
    }
}
else{
    document.write(value, " is not divisible by 3");
}