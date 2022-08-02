var root1,root2,realpart,imagpart,discrimant
var a=parseFloat(prompt("enter the coefficient of X2"))
var b=parseFloat(prompt("enter the coefficient of X"))
var c=parseFloat(prompt("enter the constant"))
discriminant=(b * b) -(4 * a * c)
if (discriminant > 0)  //  real and different roots
{
  root1= ((-b + Math.sqrt(discriminant))/(2 * a)).toFixed(2)
  root2= ((-b - Math.sqrt(discriminant))/(2 * a)).toFixed(2)
  console.log("the roots are root1 is", root1 ,"and root2 is", root2)
}
else if (discriminant==0)  // real and equal roots
{
  root1=root2= (-b/(2 * a)).toFixed(2)
  console.log("the roots are root1 is", root1 ,"and root2 is", root2)
}
else  // if the roots are not real
{
  realpart= (-b/(2 * a)).toFixed(2)
  imagpart= (Math.sqrt(-discriminant)/(2 * a)).toFixed(2)
  //root1= realpart imagpart +"i"
  //root2=realpart-imagpart+"i"
  console.log("the roots are root1 is", realpart,'+', imagpart,'i' ,"and root2 is", realpart,'-', imagpart,'i');
}