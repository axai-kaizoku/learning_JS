/** @format */

'use strict';

const vDay = new Date(2023, 7, 15, 9, 30, 0);
console.log(`Independence Day: ${vDay.toLocaleString()}`);

const whDay = new Date('7 Apr 2023')
console.log(`World Health Day: ${whDay.toLocaleString()}`)
console.log(`World Health Day: ${whDay.toDateString()}`)

// https://en.wikipedia.org/wiki/List_of_tz_database_time_zones