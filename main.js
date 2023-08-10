'use strict';

const keys = ['XDC-102-2206', 'HXC-754-1510', 'XXX-998-0311']
const dateStrings = keys.map((elem) => elem.slice(8));
console.log(dateStrings)

const keyCodes = keys.map((elem) => elem.slice(4, 7))
console.log(keyCodes)

const key = keys.map((elem) => elem.slice(0, 3))
console.log(key)

