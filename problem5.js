var fahrenheit, temp=parseFloat(prompt("Enter the temperature")); //temperature in celcius
fahrenheit=((9/5)*temp)+32;  // converting celcius to fahrenheit
fround=fahrenheit.toFixed(2)  // rounding off to two decimal places
console.log(temp, "in fahrenheit is", fround);