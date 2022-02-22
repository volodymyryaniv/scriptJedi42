// https://www.codewars.com/kata/525a5b2185a9a4f5670006c1/train/javascript
const myObj = {__proto__: MyObject.prototype};
MyObject.call(myObj)

//https://www.codewars.com/kata/558cb3df5f511f40d500001d/train/javascript
function nouveau(Constructor, ...args) {
   const instance = Object.create(Constructor.prototype);
   const option = Constructor.apply(instance, args);
   return option === Object(option) ? option : instance;
}
