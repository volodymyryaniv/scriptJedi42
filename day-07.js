//https://www.codewars.com/kata/55e7650c8d894146be000095/solutions/javascript
function validateMessage(msg) {
   if (typeof msg !== "string" && msg !== null) {
      throw new TypeError(
         `Message should be of type string but was of type ${typeof msg}!`
      );
   } else if (msg === null || msg === []) {
      throw new ReferenceError(`Message is null!`);
   } else if (msg.length === 0 || msg.length > 255) {
      throw new RangeError(`Message contains ${msg.length} characters!`);
   } else if (msg.includes("<") && msg.includes(">")) {
      return false;
   } else {
      return true;
   }
}
