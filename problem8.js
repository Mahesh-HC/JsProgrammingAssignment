var str, A=prompt("Enter the string")
if (A=="0")  // if the string is empty
{
  console.log("0")
}
else{
str=A.split(' ').join('')  // split the strings into individual array elements and join merges array into a string
}
strlength=str.length
console.log(str , "The length of a string is ", strlength);