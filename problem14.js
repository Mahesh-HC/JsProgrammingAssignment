var array=new Array(7) // creating array sixe of 7 elements
for (i=0;i<7;i++)
{
  array[i]=parseInt(prompt("enter the value of 7 numbers"))
}
console.log("the input array is :", array)
let cutarray= array.slice(parseInt(prompt("enter the value of k"))) // removing upto k elements
//console.log(cutarray)
let newarray=cutarray.concat(array)
//console.log(newarray)
let finalarray= Array.from(new Set(newarray))
console.log("left rotated arrray after k is :", finalarray);