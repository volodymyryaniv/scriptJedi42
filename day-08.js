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
function colorOf(r, g, b) {
   const red =
      r.toString(16).length <= 1
         ? (r = "0" + r.toString(16))
         : (r = r.toString(16));
   const green =
      g.toString(16).length <= 1
         ? (g = "0" + g.toString(16))
         : (g = g.toString(16));
   const blue =
      b.toString(16).length <= 1
         ? (b = "0" + b.toString(16))
         : (b = b.toString(16));
   return `#${red}${green}${blue}`;
}

//https://www.codewars.com/kata/57256064856584bc47000611/solutions/javascript
const howManySmaller = (arr, n) => arr.filter((el) => el.toFixed(2) < n).length;

