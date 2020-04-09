const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    process.exit();
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('no data returned for provided breed');
  } else {
    console.log(data[0].description);
  }
});