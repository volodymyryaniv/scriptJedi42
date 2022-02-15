//https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript
function solution(...args){
   return new Set(args).size !== args.length; 
}

//https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript
function last(){
  const list = arguments[arguments.length - 1];
  return list[list.length - 1] || list;
}
