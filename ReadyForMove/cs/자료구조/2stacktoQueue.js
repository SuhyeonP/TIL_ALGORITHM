class Stack {
    constructor() {
        this.store = [];
        this.top = -1;
    }

    push(ele) {
        this.top ++;
        this.store[this.top] = ele;
    }

    pop() {
        if (this.top > -1) {
            const val = this.store[this.top];
            this.top --;
            return val;
        }
        return null;
    }

    get length() {
        return this.top + 1;
    }
}

class Queue {
    constructor() {
        this.en = new Stack();
        this.out = new Stack();
    }

    push(ele) {
        this.en.push(ele);
    }

    pop() {
        if(this.out.length === 0) {
            while (this.en.length > 0) {
                this.out.push(this.en.pop());
            }
        }

        return this.out.pop();
    }
}

const a = new Queue();

a.push(1)
a.push(2)
a.push(3)

console.log(a.pop())
