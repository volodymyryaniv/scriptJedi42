//https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript
function shuffleIt(arr, ...arrays) {
   arrays.map(
      ([first, second]) =>
         ([arr[first], arr[second]] = [arr[second], arr[first]])
   );
   return arr;
}


//https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/train/javascript
function loopArr(arr, direction, steps) {
   for (let i = 0; i < steps; i++) {
      direction === "left" ? arr.push(arr.shift()) : arr.unshift(arr.pop());
   }
   return arr;
}

//https://www.codewars.com/kata/572af273a3af3836660014a1/train/javascript
function infiniteLoop(arr, d, n) {
   let length = arr.length;
   for (let i = 0; i < n; i++) {
      switch (d) {
         case "left":
            arr[length - 1].push(arr[0].shift());
            for (let j = length - 1; j > 0; j--) {
               arr[j - 1].push(arr[j].shift());
            }
            break;
         default:
            arr[0].unshift(arr[length - 1].pop());
            for (let j = 0; j < length - 1; j++) {
               arr[j + 1].unshift(arr[j].pop());
            }
            break;
      }
   }
   return arr;
}
