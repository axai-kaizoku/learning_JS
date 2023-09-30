class Transportation {
	constructor() {
		this.name = '';
		this.wheels = 0;
		this.maxSpeed = 0;
	}
}

class Car extends Transportation {
	constructor() {
		super();
		this.fuel = 0;
	}
}

let car1 = new Car();

car1.name = 'Skoda Rapid';
car1.wheels = 4;
car1.maxSpeed = 240;
car1.fuel = 40;

console.log(car1);
