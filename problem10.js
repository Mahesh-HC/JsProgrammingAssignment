var numbers= new Array(6)  // getting array from user
for (i=0;i<6;i++)
{
  numbers[i]=parseInt(prompt("enter the value of 6 numbers"))
}
console.log(numbers)
console.log(evenarray(numbers))
function evenarray (array)   // getting even positioned elements
{
  let arr=[]
  for (i=0;i<array.length;i++)
  {
    if (i%2==0)
    {
      arr.push(array[i])
    }
  }
  return arr;
}