var area=0,arearound=0,a=parseFloat(prompt("Enter the side value"));
area=Math.sqrt(3)*a*a/4;   // formula of an area
arearound=area.toFixed(2);  // rounding of to 2 decimal places
console.log("Area of the Equilateral Triangle is", arearound);