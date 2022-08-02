// to find factorial of a number

var number=parseInt(prompt("Enter the number"));  // to get integer value
if (number==0)   // to check number is zero
{
  console.log("Factorial of a number",number, " is 1.")
}
else if (number<0)  // if number is negative
{
  console.log("Error! Factorial doesnot exist.")
}
else  // if number is positive
{
  let fact=1;
  for(i=1;i<=number;i++)
    {
      fact *=i;
    }
  console.log("Factorial of a number", number," is ", fact);
}