const fs = require("fs");

// Read the planets.txt file asynchronously
fs.readFile('planets.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('ERROR: Unable to read text/file', err);
    return;
  }

  // Split the file contents into an array of planet names
  const planets = data.split(', ');

  // Print the planets to the console
  console.log('Here are all the planets in our Solar System: ');
  planets.forEach((planet) => {
    console.log(planet);
  });
});
