//https://www.codewars.com/kata/56b71b1dbd06e6d88100092a/train/javascript
function buildFun(n){
  const res = []
  for (let i = 0; i< n; i++){
    ((num) => res.push(() => num))(i)
  }
  return res
}

//https://www.codewars.com/kata/shifty-closures/train/javascript
const greet_abe = greet('Abe');
const greet_ben = greet('Ben');

function greet(name) {
  return function() {
    return `Hello, ${name}!`;
  };
}
