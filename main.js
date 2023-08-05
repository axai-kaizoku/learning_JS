'use script';

function computeRectStats(length, width) {
  let areaRect = Number(length) * Number(width);
  let perimeterRect = 2 * (Number(length) + Number(width));
  console.log(`Area: ${areaRect}`);
  console.log(`Perimeter: ${perimeterRect}`);
}

let rectALength = 25;
let rectAWidth = 10;
computeRectStats(rectALength, rectAWidth);

let rectBLength = 18;
let rectBWidth = 12;
computeRectStats(rectBLength, rectBWidth);