import { Publisher, Subscriber } from './PubSub.js';

const publisher = new Publisher();
const subscriber = new Subscriber('event1');
const subscriber2 = new Subscriber('event2');

publisher.publishRemainder('event1', 'Event 1 starting soon!');
publisher.publishRemainder('event2', 'Event 2 starting soon!');
