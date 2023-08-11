/** @format */

'use strict';

const message = 
  'Rivercomb is 200 miles from the station and about 150 miles from the airport';

const messageKms = message
  .replace(/\d+(?!miles)/g, (miles) => miles * 1.609)
  .replace(/miles/g, 'kms')

console.log(messageKms);