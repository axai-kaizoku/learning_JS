import { EventEmitter } from 'events';
const myEmitter = new EventEmitter();

export class Publisher {
	constructor() {}
	publishRemainder(eventName, message) {
		myEmitter.emit(eventName, message);
	}
}

export class Subscriber {
	constructor(remainder) {
		myEmitter.on(remainder, (message) => {
			console.log(message);
		});
	}
}
