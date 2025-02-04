// Program 13: Check if a person is eligible to vote based on age and citizenship

let personAge = prompt("Enter the age");
let isCitizen =  true;

if(personAge >= 18)
{

    if(isCitizen)
    {
        document.write("It is eligible to vote");
    }
    else
    {
        document.write("You must be a citizen to vote.");
    }
}
else{
    document.write("you are not old enough to vote.");
}