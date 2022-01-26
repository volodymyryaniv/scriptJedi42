//https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript
function padIt(str, n) {
   let string = str;
   let num = 0;
   while (num < n) {
      string = num % 2 === 0 ? "*" + string : string + "*";
      num++;
   }
   return string;
}

//https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
function pickIt(arr) {
   const odd = [],
      even = [];
   for (let i = 0; i < arr.length; i++) {
      arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
   }
   return [odd, even];
}

//https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript
function grabDoll(dolls) {
   const bag = [];
   for (let i = 0; i < dolls.length; i++) {
      if (bag.length >= 3) {
         break;
      } else if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
         bag.push(dolls[i]);
      } else {
         continue;
      }
   }
   return bag;
}

//https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
function giveMeFive(obj) {
   const arrayForFive = [];
   for (const element in obj) {
      if (element.length === 5) arrayForFive.push(element);
      if (obj[element].length === 5) arrayForFive.push(obj[element]);
      else continue;
   }
   return arrayForFive;
}

