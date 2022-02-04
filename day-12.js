//https://www.codewars.com/kata/59859f435f5d18ede7000050/train/javascript
function wordToBin(str) {
   return str.split("").map((el) => `0${el.charCodeAt().toString(2)}`);
}

//https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript
function calc(stringForCalc) {
   return (
      stringForCalc
         .split("")
         .map((el) => el.charCodeAt())
         .join("")
         .split("")
         .filter(number => number === "7").length * 6
   );
}
