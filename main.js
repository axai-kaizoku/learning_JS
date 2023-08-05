'use strict';

let inputUsername = 'joe';
let inputPassword = 'joe@901'; // Enter wrong password here

const database = {
  joe: {
    user: 'Jeo Linder',
    password: 'joe@901',
  },
};

let checkPassword = database[inputUsername].password === inputPassword;

checkPassword && console.log(`${database[inputUsername].user || `User`} is logged in...`)

// Added this additional feature
// Play with these operators.

checkPassword ||= console.log('Wrong Password !')