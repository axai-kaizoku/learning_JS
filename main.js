/** @format */

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];

for (let i = 0; i < planets.length; i++) {
	if (i !== 3) {
		continue;
	}
	console.log(`Perseverance Rover is on ${planets[i]}`);
}
