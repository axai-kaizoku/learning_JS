'use strict';

let restaurants = [
  {
    name: 'The Bao Boat',
    category: 'Oriental',
    location: {
      lat: 36.88,
      long: 78.21,
    },
  },
  {
    name: 'Imperial Diner',
    category: 'Continental',
    city: 'Los Angeles',
  },
];

console.log(
  `Location: ${restaurants[1].location?.lat ?? 'N/A'} , ${restaurants[1].location?.long ?? 'N/A'}`
)