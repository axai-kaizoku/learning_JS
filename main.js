'use strict';

var waterTemperature = 50;

var isItBoiling = waterTemperature >= 100;
var isItFrozen = waterTemperature <= 0;
var isItWarm = waterTemperature > 30 && waterTemperature < 60;


console.log('Is the water boiling?', isItBoiling);
console.log('Is the water frozen?', isItFrozen);
console.log('Is it warm?', isItWarm);
