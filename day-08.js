//https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript
function whatNumberIsIt(n) {
   switch (true) {
      case Number.isNaN(n):
         return "Input number is Number.NaN";
         break;
      case n === Number.MAX_VALUE:
         return "Input number is Number.MAX_VALUE";
         break;
      case n === Number.MIN_VALUE:
         return "Input number is Number.MIN_VALUE";
         break;
      case n === Number.POSITIVE_INFINITY:
         return "Input number is Number.POSITIVE_INFINITY";
         break;
      case n === Number.NEGATIVE_INFINITY:
         return "Input number is Number.NEGATIVE_INFINITY";
         break;
      default:
         return `Input number is ${n}`;
   }
}

//https://www.codewars.com/kata/57238ceaef9008adc7000603/solutions/javascript
function colorOf(...rgb) {
   return rgb.reduce((webColor, value) => {
      const toSixTeen = value.toString(16);
      return toSixTeen.length <= 1
         ? `${webColor}0${toSixTeen}`
         : `${webColor}${toSixTeen}`;
   }, "#");
}


//https://www.codewars.com/kata/57256064856584bc47000611/solutions/javascript
const howManySmaller = (arr, n) => arr.filter((el) => el.toFixed(2) < n).length;

