var googleUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
var instaUrl = 'https://api.instagram.com/v1/media/search?lat=';
var access_token = '1313861570.62797d0.8558a95fbcda4b91872abe6e757358be';
var inputField = document.querySelector('input');
var searchButton = document.querySelector('.search-button');
var result = document.querySelector('.result');
var p = document.createElement('p');

function getGoogleRequest(event) {
  // we need this because the submit button type is 'submit' and the page refreshes every time so we dont get the request. Now, we prevent this to happen.
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  var location = inputField.value;
  xhr.open('GET', googleUrl + location);
  xhr.onload = function() {
    if (xhr.readyState === xhr.DONE) {
      var response = JSON.parse(xhr.response);
      var latitude = response.results[0].geometry.location.lat;
      var longitude = response.results[0].geometry.location.lng;
      result.appendChild(p);
      p.textContent = 'The latitude is: ' + latitude +  ', and the longitude is: ' + longitude;
      getInstaRequest(latitude, longitude)
    }
  };
  xhr.send();
}

function getInstaRequest(latitude, longitude) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', instaUrl + latitude + '&lng=' + longitude + '&access_token=' + access_token);
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.readyState === xhr.DONE) {
      // response.forEach(function (e) {
      //   document.createElement('img');
      //   img.setAttribute('src', response[e],  'data[0].images.low_resolution')
      // result.appendChild(p);
    }
  };
  xhr.send();
}

searchButton.addEventListener('click', getGoogleRequest);
