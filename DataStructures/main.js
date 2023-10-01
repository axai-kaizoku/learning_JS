class Node {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.front = new Node(null, null);
		this.size = 0;
	}

	insertFront(val) {
		var nodeIn = new Node(val, this.front);
		this.front = nodeIn;
		this.size++;
	}

	print() {
		var holder = this.front;
		while (holder.next != null) {
			console.log(holder.value);
			holder = holder.next;
		}
	}

	insert(val, index) {
		if (index > this.size) {
			throw 'IndexOfRange';
		} else {
			if (index === 0) {
				this.insertFront(val);
			} else {
				var i = 0;
				var holder = this.front;

				while (i < index - 1) {
					holder = holder.next;
					i++;
				}

				var newNode = new Node(val, holder.next);
				holder.next = newNode;
				this.size++;
			}
		}
	}

	deleteFront() {
		this.front = this.front.next;
		this.size--;
	}

	delete(index) {
		if (index > this.size) {
			throw 'IndexOutOfRange';
		} else {
			if (index === 0) {
				this.deleteFront();
			} else {
				var i = 0;
				var holder = this.front;

				while (i < index - 1) {
					holder = holder.next;
					i++;
				}

				holder.next = holder.next.next;
				this.size--;
			}
		}
	}
}

var l = new LinkedList();
l.insertFront(1);
l.insertFront(2);
l.insert(3, 1);
l.delete();
l.print();
