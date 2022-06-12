class Queue {
    constructor() {
        this.store = [];
    }

    get length() {
        return this.store.length;
    }

    enqueue(ele) {
        this.store.push(ele);
    }

    dequeue() {
        return this.store.shift();
    }

    empty() {
        return this.store.length === 0;
    }
}

class Stack {
    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }

    push (ele) {
        if (this.queue1.empty()) {
            this.queue1.enqueue(ele);
        } else {
            while (!this.queue1.empty()) {
                this.queue2.enqueue(this.queue1.dequeue());
            }
            this.queue1.enqueue(ele)

            while (!this.queue2.empty()) {
                this.queue1.enqueue(this.queue2.dequeue());
            }
        }
    }

    pop() {
        return this.queue1.dequeue();
    }
}

const check = new Stack();

check.push(2);
check.push(3);
check.push(6);
check.push(5);
console.log(check.pop());
