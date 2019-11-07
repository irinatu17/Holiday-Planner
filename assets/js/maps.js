//Global Variables---------------------------------
var map, places, infoWindow;
var markers = [];
var autocomplete;
var ireland = { lat: 53.2, lng: -9.0 };
var placeType;
var service;

//Initialize Map------------------------------------
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: ireland,
    zoom: 2
  });

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content'),
    maxWidth: 200
  });
  
  
  
  autocomplete = new google.maps.places.Autocomplete(
    (
      document.getElementById('searchBox')), {
      types: ['(cities)'],
    });
  places = new google.maps.places.PlacesService(map);

  autocomplete.addListener('place_changed', onPlaceChanged);
}
//Place search---------------------------------------
function onPlaceChanged() {
  var place = autocomplete.getPlace();
  if (place.geometry) {
    map.panTo(place.geometry.location);
    map.setZoom(13);
    selectedType = 'lodging'
    search();
  }
  else {
    document.getElementById('searchBox').placeholder = 'Where are you going?';
  }
}