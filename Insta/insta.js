var googleUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
var inputField = document.querySelector('input');
var searchButton = document.querySelector('.search-button');
var result = document.querySelector('.result');
var p = document.createElement('p');

// var getLocation = function(location) {
//   var geocoder = new google.maps.Geocoder();
//   var location = inputField.value;
//   geocoder.geocode( {'address': location}, function(results, status) {
//   if (status == google.maps.GeocoderStatus.OK) {
//     var latitude = results[0].geometry.location.lat();
//     var longitude = results[0].geometry.location.lng();
//     console.log(latitude, longitude);
//   }
//   });
// };
//
// getLocation('New York');
//
// searchButton.addEventListener('click', getLocation);

// get request
function getRequest(event) {
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  var location = inputField.value;
  console.log(location);
  xhr.open('GET', googleUrl + location)
  xhr.onload = function() {
    if (xhr.readyState === xhr.DONE) {
      var response = JSON.parse(xhr.response);
      var latitude = response.results[0].geometry.location.lat;
      var longitude = response.results[0].geometry.location.lng;
      result.appendChild(p);
      p.textContent = 'The latitude is: ' + latitude +  ', and the longitude is: ' + longitude;
      console.log(latitude, longitude);
    }
  };
  xhr.send();
}


searchButton.addEventListener('click', getRequest);
