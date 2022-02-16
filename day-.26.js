//https://www.codewars.com/kata/5388a9d60b24c52f4c000b5f/train/javascript
Function.prototype.bind = function (ctx) {
   const func = this;
   return function(...args) {
     return func.apply(this === global ? ctx : this,...args)
   }
};

//https://www.codewars.com/kata/559f3e20f4f29869cf0000ea/train/javascript
const OrderPeople = people => people.sort((first, next) => first.age - next.age);
