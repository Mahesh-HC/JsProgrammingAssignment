var num=parseInt(prompt("enter the number"))
var count=0;
for (i=1;i<=num;i++)
{
 var n=i
 var rev=0
  while(n>0)
  {
    var rem=parseInt(n % 10)
    rev=(rev * 10) + rem;
    n= parseInt(n / 10);
  }
  if (rev==i)
  {
    console.log(i)
    count=count+1;  // also written as count++
  }
}
console.log("Total palindrome count is:",count);