// Program 4: Determine a grade based on the score

let score = prompt("Enter the score:");

if(score<=100 && score>=90)
{
    document.write("Grade: A");
}
else if(score<=89 && score>=80)
{
    document.write("Grade: B");
}
else if(score<=79 && score>=70)
{
    document.write("Grade: C");
}
else if(score<=69 && score>=60)
{
    document.write("Grade: D");
}
else if(score<=59 && score>=36)
{
    document.write("Grade: E");
}
else{
    document.write("FAIL");
}