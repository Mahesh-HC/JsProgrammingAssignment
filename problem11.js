var numbers= new Array(6) ; // getting array from user
for (i=0;i<6;i++)
{
  numbers[i]=parseInt(prompt("enter the value of 6 numbers"));
}
console.log("the input array is", numbers);
const duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
//console.log(duplicates);  // duplicate elements in an array
let sortd=duplicates.sort((a,b)=>b-a);  // sorting in descending order
//console.log(sortd);
let sortn=numbers.sort((a,b)=>b-a); // sorting in descending order
let final=sortd.concat(sortn) ;  // joining two arrays
//console.log(final);
const unique=Array.from(new Set(final)) ; // removing duplicate elements
console.log(unique);