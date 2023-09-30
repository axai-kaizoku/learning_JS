class Queue {
	constructor() {
		this.queue = [];
		this.front = 0;
		this.rear = 0;
	}

	enqueue(val) {
		this.queue[this.rear] = val;
		this.rear++;
	}

	dequeue() {
		if (this.queue.length > 0) {
			var val = this.queue[this.front];
			delete this.queue[this.front];
			this.front++;
			return val;
		} else {
			throw 'Stack Underflow!';
		}
	}

	print() {
		console.log(this.queue);
	}
}

var q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.print();
q.dequeue();
q.print();
