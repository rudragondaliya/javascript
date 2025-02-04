// Program 8: Determine discount eligibility based on membership and spending

let isMember = true;
let spending = 200;

if(isMember)
{
    if(spending > 100)
    {
        document.write("you got 20% discount");
    }
    else
    {
        document.write("you got 10% discount");
    }  
}
else
{
    document.write("No discount available for non-members.");
}
