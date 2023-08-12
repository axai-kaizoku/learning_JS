/** @format */

'use strict';

const log = (str) => console.log(str);
const now = new Date();

now.setDate(10);
now.setMonth(3);
now.setMinutes(30);
now.setHours(12);

log(now.getDate());
log(now.getDay());
log(now.getMonth());
log(now.getFullYear());

log(now.getHours())
log(now.getMinutes())
log(now.getSeconds())
log(now.getMilliseconds())
log(now.getTimezoneOffset() / 60)
log(now.toTimeString())