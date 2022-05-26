class Sausage {
    constructor(ele1, ele2) {
        this.inside1 = ele1;
        this.inside2 = ele2;
    }

    taste() {
        return `This sausage made by ${this.inside1} and ${this.inside2}.`;
    }
}

class FlavorSausage extends Sausage {
    constructor(flavor, ele1, ele2) {
        super(ele1, ele2);
        this.flavor = flavor;
    }

    review() {
        return `This ${this.flavor} sausage taste ${this.inside1} and ${this.inside2}.`;
    }
}

const fireSausage = new FlavorSausage('fire', 'garlic', 'fork');

console.log(fireSausage.taste());
console.log(fireSausage.review());
