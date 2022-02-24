//https://www.codewars.com/kata/557e508a47c7e9adf9000062/train/javascript
Object.prototype.description = "TODO: GIVE ME A DESCRIPTION" 

//https://www.codewars.com/kata/513e1e47c600c93cef000001/train/javascript
function Animal(name, type) {
   this.name = name;
   this.type = type;
}

Animal.prototype.toString = function () {
   return `${this.name} is a ${this.type}`;
};
