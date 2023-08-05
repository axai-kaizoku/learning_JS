'use script';

let user = {
  name: 'Rob Williams',
  age: 22,
  livesIn: 'New Jersey',
  introduction: function () {
    return `Hi, my name is ${this.name}. I'm ${this.age} years old and I live in ${this.livesIn}`;
  },
};

console.log(user.introduction());