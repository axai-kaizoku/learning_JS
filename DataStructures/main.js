class Stack {
	constructor() {
		this.stack = [];
	}

	push(val) {
		this.stack.push(val);
	}

	pop() {
		return this.stack.pop();
	}

	print() {
		console.log(this.stack);
	}
}

class Queue {
	constructor() {
		this.s1 = new Stack();
		this.s2 = new Stack();
	}

	enqueue(val) {
		while (!this.s1.isEmpty()) {
			this.s2.push(this.s1.pop());
		}
		this.s1.push(val);

		while (!this.s2.isEmpty()) {
			this.s1.push(this.s2.pop());
		}
	}

	dequeue() {
		return this.s1.pop();
	}
}

const num = new Queue();
console.log(num);
