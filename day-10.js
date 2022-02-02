//https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript
function alienLanguage(str) {
   const uppers = str.toUpperCase().split(" ");
   return uppers
      .map((el) => {
         return el.slice(0, -1) + el.slice(-1).toLowerCase();
      })
      .join(" ");
}

//https://www.codewars.com/kata/57284d23e81185ae6200162a/train/javascript
function topSecret(str){
  let chArr = str.split('');
  for (let i = 0; i < chArr.length; i++){
    if(chArr[i] === 'A' || chArr[i] === 'B' || chArr[i] === 'C' || chArr[i] === 'a' || chArr[i] === 'b' || chArr[i] === 'c') {
      chArr[i] = String.fromCharCode(chArr[i].charCodeAt()+23)
    } else if (chArr[i] === ' ' || (chArr[i].charCodeAt()-3) < 65 ) {
      continue
    } else {
      chArr[i] = String.fromCharCode(chArr[i].charCodeAt()-3);
    } 
  }
  return chArr.join('')
  
}
//question1: The top secret file number is...
answer1="3518";
//question2: Super agent's name is...
answer2="cHH";
//question3: He stole the treasure is...
answer3="Expired biscuits";

//https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript
function fiveLine(s) {
   let str = s.trim();
   for (let i = 2; i <= 5; i++) {
      str += `\n${s.trim().repeat(i)}`;
   }
   return str;
}
