var value, term = parseInt(prompt("Enter the nth term"))
if (term < 0)  // if number is negative
{
  console.log(term, "- Error")
}
else if (term == 0) // if number is 0
{
  console.log(term, "- zero (0)")
}
else {
  value = term * term;
  console.log(term, "- value in the series is  ", value);
}