// Program 14: Check if a password meets the minimum length requirement


let passwordInput = "Rudra@123";
passwordInput = prompt("enter the Password:");

if(passwordInput.length >=8)
{
    alert("Password is Acceptable");
}
else
{
    alert("Your password must be atleast 8 characters");
}