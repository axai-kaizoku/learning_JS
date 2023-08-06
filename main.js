'use script';


const rectangle = {
  width: 20,
  area() {
    return (length) => this.width * length;
  },
};


try {
  const areaOfRectangle = rectangle.area();
  console.log(`Area: ${areaOfRectangle(50)}`);
} catch (error) {
  console.log(error.message);
}
