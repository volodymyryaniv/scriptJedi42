//https://www.codewars.com/kata/573023c81add650b84000429/train/javascript
function countGrade(scores) {
   const obj = {S: 0,A: 0,B: 0,C: 0,D: 0,X: 0,};
   scores.filter((el) => {
      return el === 100
         ? (obj.S += 1)
         : el < 100 && el >= 90
         ? (obj.A += 1)
         : el < 90 && el >= 80
         ? (obj.B += 1)
         : el < 80 && el >= 60
         ? (obj.C += 1)
         : el < 60 && el >= 0
         ? (obj.D += 1)
         : (obj.X += 1);
   });
   return obj
}

//https://www.codewars.com/kata/57308546bd9f0987c2000d07/train/javascript
function mirrorImage(arr) {
   let firstNum;
   let mirrorNum;
   const result = arr.some((el, idx) => {
      firstNum = el;
      mirrorNum = arr[idx + 1];
      return el === Number(String(mirrorNum).split("").reverse().join(""));
   });

   return result ? [firstNum, mirrorNum] : [-1, -1];
}

//https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript
function bigToSmall(arr) {
   const array = []
      .concat(...arr)
      .sort((a, b) => b - a)
      .join(">");
   return array;
}
