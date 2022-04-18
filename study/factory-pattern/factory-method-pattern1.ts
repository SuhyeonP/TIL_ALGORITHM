// @ts-ignore
abstract class Creator {
    public abstract factoryMethod () : Product;

    public someOperation() : string{
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`
    }
}

class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1;
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

interface Product {
    operation(): string;
}

class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1}';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct2}';
    }
}

function clientCode(creator: Creator) {
    console.log('Client: I\'m aware of the creator\'s class, but it still works');
    console.log(creator.someOperation())
}

console.log('App Launched with the ConcreteCreator1');
clientCode(new ConcreteCreator1());

console.log('App Launched with the ConcreteCreator2');
clientCode(new ConcreteCreator2())


class Resource {
}

class Water extends Resource {
}

class Milk extends Water {
}

class Espresso extends Resource {
}


class Cup {
    constructor() {
    }

    add(resource: Resource): void {
        console.log(resource)
    }
}


class PaperCup extends Cup {
}

function making() {
    const cup: Cup = new Cup();
    const water: Water = new Water();
    const espresso: Espresso = new Espresso();

    cup.add(water);
    cup.add(espresso);

    return cup;
}

interface ICoffeeFactory {
    makeCup(): Cup;

    makeWater(): Water;

    makeEspresso(): Espresso;
}

class CoffeeFactory implements ICoffeeFactory {
    makeCup(): Cup {
        return new Cup();
    }

    makeEspresso(): Espresso {
        return new Espresso();
    }

    makeWater(): Water {
        return new Water()
    }
}

function makingCoffee(factory: ICoffeeFactory) {
    const cup: Cup = factory.makeCup();
    const espresso: Espresso = factory.makeEspresso();
    const water: Water = factory.makeWater();

    cup.add(espresso);
    cup.add(water);

    return cup;
}

// makingCoffee(new CoffeeFactory())

abstract class CoffeeMaker {
    constructor() {
    }

    makeCup(): Cup {
        return new Cup()
    }

    makeEspresso(): Espresso {
        return new Espresso()
    }

    makeWater(): Water {
        return new Water()
    }

    makeCoffee(): Cup {
        const cup: Cup = this.makeCup();
        const espresso: Espresso = this.makeEspresso();
        const water: Water = this.makeWater();

        cup.add(water);
        cup.add(espresso);

        return cup;
    }
}

class CappuccinoCoffeeMaker extends CoffeeMaker {
    makeCup(): Cup {
        return new PaperCup();
    }

    makeWater(): Water {
        return new Milk()
    }
}

// new CappuccinoCoffeeMaker();

class SingleCoffeeMaker {
    private static _instance: CoffeeMaker;

    static instance(): CoffeeMaker {
        if (!SingleCoffeeMaker._instance) {
            // @ts-ignore
            SingleCoffeeMaker._instance = new CoffeeMaker();
        }

        return SingleCoffeeMaker._instance;
    }
}

const coffeeMaker = SingleCoffeeMaker.instance();
coffeeMaker.makeCoffee()
