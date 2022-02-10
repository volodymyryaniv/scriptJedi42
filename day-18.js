//https://www.codewars.com/kata/573156709a231dcec9000ee8/train/javascript
function tailAndHead(arr) {
   let product = 1;
   arr.reduce((prev, curr) => {
      const last = prev.toString();
      const first = curr.toString();
      product *= parseInt(last.slice(-1)) + parseInt(first.slice(0, 1));
      return curr;
   });
   return product;
}

//https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript
function blackAndWhite(arr) {
   return !Array.isArray(arr)
      ? "It's a fake array"
      : arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1
      ? "It's a black array"
      : "It's a white array";
}

//https://www.codewars.com/kata/5735956413c2054a680009ec/train/javascript
function rndCode() {
   const upper = "ABCDEFGHIJKLM";
   const char = "~!@#$%^&*";
   const num = "123456789";
   const code = [upper, upper, num, num, num, num, char, char]
      .map((el) => el[~~(Math.random() * el.length)])
      .join("");
   return code;
}
