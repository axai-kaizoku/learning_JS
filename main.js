var user = 'Sarah Rice';

function sayHi() {
  var greeting = "It's so good to meet you!";
  function greet() {
    return `She also says, ${greeting}`;
  }
  console.log(`${user} says Hi!`);
  console.log(greet());
}

sayHi();
