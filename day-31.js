//https://www.codewars.com/kata/singleton-pattern/train/javascript
const Singleton = function () {
   if (Singleton.instance) {
      return Singleton.instance;
   }

   Singleton.instance = this;
};

//https://www.codewars.com/kata/588a00ad70720f2cd9000005/solutions/javascript
class Router {
    constructor() {
        this.routes = {};
    }
    bind(path, method, action) {
        this.routes[`${method} ${path}`] = action;
    }
    runRequest(path, method) {
        const action = this.routes[`${method} ${path}`];
        return action ? action() : 'Error 404: Not Found';
    }
}
