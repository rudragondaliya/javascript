let i;
let temp;
let a = 0;
let b = 1;
for(i=1;i<=4;i++)
{
  for(j=1;j<=i;j++)
  {
    temp = a+b;
    document.write(temp, " ");
    a = b;
    b = temp
    

  }
  document.write("<br>")
}