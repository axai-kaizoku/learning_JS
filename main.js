'use strict';

let tempData = [
  {
    location: 'Block A - East',
    sensor1: 0,
    sensor2: 0,
    sensor3: 4.2,
  },
  {
    location: 'Block B - East',
    sensor1: 0,
    sensor3: 4,
  },
];

console.log(
  `${tempData[1].location}: ${
    tempData[1].sensor1 ?? tempData[1].sensor2 ?? tempData[1].sensor3
  } degrees`
);