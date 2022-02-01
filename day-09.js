//https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript
function cutIt(arr) {
  const shortestWords = [...arr].sort((a,b)=> a.length - b.length)[0].length;
  return arr.map(el => el.slice(0,shortestWords));
}

//https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript
function firstToLast(str, c) {
   const firstChar = str.indexOf(c);
   const lastChar = str.lastIndexOf(c);
   return firstChar === -1 && lastChar === -1 ? -1 : lastChar - firstChar;
}

//https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript
function splitAndMerge(string, separator) {
   return string
      .split("")
      .join(separator)
      .split(separator + " " + separator)
      .join(" ");
}

