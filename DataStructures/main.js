class GraphNode {
	constructor(name, weight) {
		this.name = name;
		this.weight = weight;
	}
}

class PriorityQueue {
	constructor() {
		this.items = [];
	}

	enqueue(element, weight) {
		var graphNode = new GraphNode(element, weight);
		var contain = false;
		var i = 0;
		while (i < this.items.length && !contain) {
			if (this.items[i].weight > graphNode.weight) {
				this.items.splice(i, 0, graphNode);
				contain = true;
			}
			i++;
		}

		if (!contain) {
			this.items.push(graphNode);
		}
	}

	dequeue() {
		if (this.items.length === 0) {
			throw 'Stack Underflow';
		} else {
			return this.items.shift();
		}
	}

	print() {
		console.log(this.items);
	}
}

var pq = new PriorityQueue();
pq.enqueue(1, 100);
pq.enqueue(10, 200);
pq.enqueue(9, 200);
pq.enqueue(3, 20);
pq.enqueue(0, 40);
// pq.dequeue();
pq.print();
