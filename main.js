'use script';

let point1 = {
  x: 4,
  y: 6,
};

let point2 = {
  x: 2,
  y: 4,
};

function calcDistance(p1, p2) {
  return Math.hypot(p2.x - p1.x, p2.y - p1.y);
}

console.log(`
Distance between point1 and point2 is ${calcDistance(point1, point2)}
`);