//https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript
function process2Arrays(arr1, arr2) {
   const firstArr = new Set(arr1);
   const secondArr = new Set(arr2);
   let both = 0;
   for (const el of firstArr) {
      if (secondArr.has(el)) both++;
   }
   return [
      both,
      firstArr.size + secondArr.size - both * 2,
      firstArr.size - both,
      secondArr.size - both,
   ];
}
//https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript
const areEqual = (s1, s2) => {
   return s1.size === s2.size && [...s1].every((e) => s2.has(e));
};
const notEqual = (s1, s2) => !areEqual(s1, s2);
