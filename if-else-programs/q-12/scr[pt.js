// Program 12: Determine the season based on the month (1-12)

let month = 12;
let season = "";

if(month === 12 || month === 1 || month === 2)
{
    season = console.log("winter");;
   
}
else if(month>=3 && month<=5)
{
    season = console.log("Spring");
}
else if(month>=6 && month<=8)
{
    season = console.log("Summer");
}
else if(month>=9 && month<=11)
{
    season = console.log("Monsoon");
}
else
{
    season = console.log("Invalid Month");
}