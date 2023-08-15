const bug = document.querySelector('.ladybird');
const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');
const homeBtn = document.querySelector('#home');
const turnClockwiseBtn = document.querySelector('#turnClockWise');
const turnAntiClockwiseBtn = document.querySelector('#turnAntiClockWise');

let rotation = 0;
let xPos = 0;
let yPos = 0;

const turnClockwise = () => {
	rotation += 90;
	bug.style.transform = `rotate(${rotation}deg)`;
};

const turnAntiClockwise = () => {
	rotation -= 90;
	bug.style.transform = `rotate(${rotation}deg)`;
};

function setTransform() {
	bug.style.left = `${xPos}px`;
	bug.style.top = `${yPos}px`;
}

const stepUp = () => {
	yPos > 0 && (yPos += -10);
	setTransform();
};

const stepDown = () => {
	yPos < 450 && (yPos += 10);
	setTransform();
};

const stepRight = () => {
	xPos < 450 && (xPos += 10);
	setTransform();
};

const stepLeft = () => {
	xPos > 0 && (xPos += -10);
	setTransform();
};

const home = () => {
	xPos = 0;
	yPos = 0;
	setTransform();
};

// Mouse Click events
turnClockwiseBtn.addEventListener('click', turnClockwise);
turnAntiClockwiseBtn.addEventListener('click', turnAntiClockwise);
upBtn.addEventListener('click', stepUp);
downBtn.addEventListener('click', stepDown);
rightBtn.addEventListener('click', stepRight);
leftBtn.addEventListener('click', stepLeft);
homeBtn.addEventListener('click', home);

// Keyboard events
const keyMapping = {
	'ArrowUp': stepUp,
	'ArrowDown': stepDown,
	'ArrowRight': stepRight,
	'ArrowLeft': stepLeft,
	']': turnClockwise,
	'[': turnAntiClockwise,
	'H': home,
	'h': home,
};

document.addEventListener('keydown', function (event) {
	const { key } = event;
	keyMapping[key]();
});
