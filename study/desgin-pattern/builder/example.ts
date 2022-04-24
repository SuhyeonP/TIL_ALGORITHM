class User {
    name: string = '';
    age: number = 0;

    constructor(builder) {
        this.name = builder.getName();
        this.age = builder.getAge();
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    static Builder = class {
        name = '';
        age = 0;

        getName() {
            return this.name;
        }

        getAge() {
            return this.age;
        }

        setName(value) {
            this.name = value;
            return this;
        }

        setAge(value) {
            this.age = value;
            return this;
        }

        builder() {
            return new User(this);
        }
    }
}

const user = new User.Builder()
    .setName('hi-test')
    .setAge(22);

