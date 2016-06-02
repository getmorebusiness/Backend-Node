var GooglePlaces = require('google-places');

var places = new GooglePlaces('AIzaSyASABv625x2zSy-woLEq8AQb2owMMcBDU4');

places.search({
  // keyword: 'Vermonster',
  location: [42.278874, -83.025645],
  radius: 50,
}, function(err, response) {
  console.log("search: ", response.results);

  places.details({reference: response.results[0].reference}, function(err, response) {
    console.log("search details: ", response.result);
    // search details:  http://www.vermonster.com/
  });
});

// places.autocomplete({input: 'Verm', types: "(cities)"}, function(err, response) {
//   console.log("autocomplete: ", response.predictions);

//   var success = function(err, response) {
//     console.log("did you mean: ", response.result.name);
//     // did you mean:  Vermont
//     // did you mean:  Vermont South
//     // did you mean:  Vermilion
//     // did you mean:  Vermillion
//   };

//   for(var index in response.predictions) {
//     places.details({reference: response.predictions[index].reference}, success);
//   }
// });