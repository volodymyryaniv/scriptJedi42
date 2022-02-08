//https://www.codewars.com/kata/572cb264362806af46000793/train/javascript
function threeInOne(arr) {
   const newArr = arr.slice();
   for (let i = 0; i < arr.length / 3; i++) {
      const sum = newArr[i] + newArr[i + 1] + newArr[i + 2];
      newArr.splice(i, 3, sum);
   }
   return newArr;
}

//https://www.codewars.com/kata/572df796914b5ba27c000c90/train/javascript
const sortIt = (arr) => {
   const res = arr.slice();
   return res.sort((a, b) => {
      let groupOne = arr.filter((x) => x === a).length;
      let groupTwo = arr.filter((y) => y === b).length;
      return groupOne === groupTwo ? b - a : groupOne - groupTwo;
   });
};

//https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript
function isolateIt(arr) {
   return arr.map(
      (part) => `${part.slice(0, part.length / 2)}|${part.slice(-part.length / 2)}`
   );
}
