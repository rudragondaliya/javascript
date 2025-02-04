// Program 10: Determine if a year is a leap year

let year = prompt("Enter the year:");

if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
{
    document.write(year," is a leap year");
}
else
{
  document.write(year," it is not a leap year");
}