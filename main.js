/** @format */

// A todo

const Tasks = function (title) {
	this.title = title ?? 'My tasks';
	this.taskList = [];
	this.showTasks = function () {
		console.log(`----${this.title}----`);
		this.taskList.forEach((item, index) => console.log(`${index + 1}.${item}`));
	};
	this.add = function (item) {
		this.taskList = [item, ...this.taskList];
	};
};

const myTasks = new Tasks('Daily Tasks');
myTasks.add('Read 10 pages of book');
myTasks.add('Solve the daily challenge');
myTasks.showTasks();

const shopping = new Tasks('Shopping');
shopping.add('Buy HDMI cable');
shopping.add('Buy new manga chapter');
shopping.showTasks();
