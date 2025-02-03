// Program 5: Simple login simulation using nested if statements

let username = "Rudra Gondaliya";
let password = "12345";

username = prompt("Enter the username:");
password = prompt("Enter the password:");

if(username === "Rudra Gondaliya")
{
    if(password === "12345")
    {
        alert("Login Successfully!..");
    }
    else
    {
        alert("Incorrect Password.");
    }
}
else{
    alert("Unknown Username");
}


