function Sausage(ele1, ele2) {
    this.inside1 = ele1;
    this.inside2 = ele2;
}

Sausage.prototype.taste = function() {
    return this.inside1 + '와 ' + this.inside2 + '맛이 난다';
}

const mySausage = new Sausage('garlic','fork');

console.log(mySausage.taste());

function FlavorSausage(el1, el2, el3) {
    Sausage.call(this, el1, el2);
    this.flavor = el3
}

FlavorSausage.prototype.review = function () {
    return `이 소세지는 ${this.inside1}과 ${this.inside2}로 만들어졋고 ${this.flavor}향이 난다.`
}
//
// const myNewSausage = new FlavorSausage('garlic', 'fork', 'fire');
// console.log(myNewSausage.review())
//

FlavorSausage.prototype = Object.create(Sausage.prototype);
FlavorSausage.prototype.constructor = FlavorSausage;

const testSausage = new FlavorSausage('mix1', 'mix2', 'flavor');
console.log(testSausage.taste())


function Pasta (ele1, ele2) {
    this.base = ele1;
    this.main = ele2;
}

Pasta.prototype.taste = function() {
    return `This ${this.base} 's ${this.main} is perfect`;
}

const tomatoShrimpPasta = new Pasta('tomato', 'shrimp');
console.log(tomatoShrimpPasta.taste());

function Risotto (ele1, ele2) {
    Pasta.call(this, ele1, ele2);
}

Risotto.prototype = Object.create(Pasta.prototype);
Risotto.prototype.constructor = Risotto;

const CreamCheeseRisotto = new Risotto('cream','cheese');

console.log(CreamCheeseRisotto.taste());
