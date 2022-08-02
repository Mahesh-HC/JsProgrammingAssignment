var month, nvalue=parseInt(prompt("Enter the nvalue"));
switch(nvalue)
  {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:  // january,march,may,july,august,october,december
    month="Month has 31 days"
    break
    case 4: case 6: case 9: case 11:  // april,june,september,november
    month="Month has 30 days"
    break
    case 2:  // february
    month="Month has 28 days"
    break
    default :
    month="Error Input is not in the valid range"
    break
  }
console.log(nvalue, "-", month);