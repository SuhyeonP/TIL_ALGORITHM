function MyOwn() {

}

var myObj = new MyOwn();

console.log(myObj instanceof MyOwn) // true
console.log(myObj.constructor === MyOwn) //true

function Food(taste) {
    this.taste = taste;
    this.smell = function () {
        console.log(this.taste + ' smell');
    }
}

const banana = new Food('banana');
const apple = new Food('apple');
const peach = new Food('peach');
banana.smell() // banana smell;
