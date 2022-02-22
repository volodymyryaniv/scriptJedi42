//https://www.codewars.com/kata/52e5e86b2ff32887280002e4/train/javascript
function Cylon(model) {
   this.model = model;
}
Cylon.prototype.attack = () => 'Destroy all humans!';

function HumanSkin(model) {
   return new Cylon(model);
}
HumanSkin.prototype = Cylon.prototype;
HumanSkin.prototype.infiltrate = () => 'Infiltrate the colonies';

// https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript
function isSantaClausable(obj) {
   return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(
      (methodsName) => typeof obj[methodsName] === 'function'
   );
}
