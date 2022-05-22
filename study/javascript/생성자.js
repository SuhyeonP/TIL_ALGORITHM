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
// 위 그대로 한다면 banana.smell !== apple.smell 그래서 this 를 활용해 본다면


function smell() {
    console.log(this.name + ' Smell');
}

function CheckFood(taste) {
    this.name = taste;
    this.smell = smell;
}

const pineApple = new CheckFood('pineapple');
const orange = new CheckFood('orange');

pineApple.smell()
orange.smell()

console.log(pineApple.smell === orange.smell) // true
