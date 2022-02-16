//https://www.codewars.com/kata/52d56d9c6b02b2fa9a0006d9/train/javascript
Function.prototype.call = function(context,...args) {
  return this.apply(context,args)
}

//https://www.codewars.com/kata/53d4eec01f1a9b3020000786/train/javascript
name = 'The Window';

const alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
        return () => this.name;
    }
};
