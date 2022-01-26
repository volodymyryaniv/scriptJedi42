//https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/javascript
function correctTail(body, tail) {
   const sub = body.substring(body.length - 1);
   return sub === tail ? true : false;
}

//https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
function bonusTime(salary, bonus) {
   return bonus ? `£${salary * 10}` : `£${salary}`;
}

//https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript
function automorphic(n) {
   const num = String(n);
   const result = String(n * n);
   const comparison = result.substring(result.length - num.length);
   return comparison === num ? "Automorphic" : "Not!!";
}
