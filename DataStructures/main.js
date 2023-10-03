class HashTable {
	constructor(size) {
		this.size = size;
		this.values = {};
	}

	calculateHash(value) {
		var sum = 0;
		for (var i = 0; i < value.length; i++) {
			var charCode = value.charCodeAt(i);
			sum += charCode;
		}

		return sum % this.size;
	}

	add(key, value) {
		var hash = this.calculateHash(value);
		this.values[key] = value;
	}

	getItem(key) {
		var hash = this.calculateHash(key);
		return this.values[key];
	}

	print() {
		console.log(this.values);
	}
}

var h = new HashTable(251);
h.add('Hello', 'World!');
h.add(5, 41);
h.add('Hot', 69);
h.add(20, 'Twenty');
console.log(h.getItem(20));
console.log(h.getItem('Hot'));
console.log(h.getItem(5));
console.log(h.getItem('Hello'));
h.print();
