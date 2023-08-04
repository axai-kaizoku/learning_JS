var lengthOfRectangle = 5;

function computeArea() {
  var breadthOfRectangle = 20;
  function area() {
    return lengthOfRectangle * breadthOfRectangle;
  }

  console.log(`Area of Rectangle: ${area()}`);
}

computeArea();