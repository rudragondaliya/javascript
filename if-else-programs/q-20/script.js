// Program 20: Check if a person meets multiple conditions for a special offer

let customerAge = 34;
let isMemberstatus = true;
let purAmt = 250;

if(customerAge >= 25 && isMemberstatus && purAmt >=200)
{
    document.write("Congratulations! You qualify for our special offer.")
}
else
{
    document.write("Sorry, you do not qualify for the special offer.");
}