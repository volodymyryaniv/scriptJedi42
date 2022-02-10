// https://www.codewars.com/kata/5735e39313c205fe39001173/train/javascript
function countAnimals(animals,count){
   return count.map(el => (animals.match(new RegExp (el ,"g")) || []).length)
}

// https://www.codewars.com/kata/573975d3ac3eec695b0013e0/train/javascript
function findSimilarity(str, word) {
   const arr = str.split(/ /);
   const reg = word[0] + word.slice(1, -1).replace(/./g, ".") + word.slice(-1);
   const regExp = new RegExp("^" + reg + "$");
   return arr.filter((el) => regExp.test(el)).join(" ");
}
