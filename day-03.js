//https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript
function trueOrFalse(val) {
   if (val) return "true";
   else return "false";
}

//https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
function saleHotdogs(quantity) {
   return quantity < 5
      ? quantity * 100
      : quantity >= 5 && quantity < 10
      ? quantity * 95
      : quantity * 90;
}

//https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript
function howManydays(month) {
   let days;
   switch (month) {
      case 4:
      case 6:
      case 9:
      case 11:
         days = 30;
         break;
      case 2:
         days = 28;
         break;
      default:
         days = 31;
   }
   return days;
}

