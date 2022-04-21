export interface Builder {
    productA(): void;
    productB(): void;
}

class Product1 {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}

class ConcreteBuilder1 implements Builder {
    private product!: Product1;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product1;
    }

    public productA(): void {
        this.product.parts.push('Part A');
    }

    public productB(): void {
        this.product.parts.push('Part B');
    }

    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Director {
    private builder!: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.productA();
        this.builder.productB();
    }
}

function clientCode(director: Director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
    console.log(builder)

    console.log('Standard full featured product');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
    console.log(builder)

    console.log('Custom Product');
    builder.productA();
    builder.productB();
    builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);
