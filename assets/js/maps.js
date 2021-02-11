//Global Variables---------------------------------
let map;
let infoWindow;
let placesService;
let markers = [];
let ireland = { lat: 53.2, lng: -9.0 };
let autocomplete;
let placeType;


//Initialize Map------------------------------------
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: ireland,
    zoom: 2,
    panControl: true,
    zoomControl: true,
    streetViewControl: true
  });

  // Info window with place details (takes the content from index.html
  // to generate pop-up window on map for each establishment)
  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });


  autocomplete = new google.maps.places.Autocomplete(
    (
      document.getElementById('searchPlace')), {
      types: ['(cities)'],
    });

  autocomplete.addListener('place_changed', onPlaceChanged);

  //Place search

  function onPlaceChanged() {
    let place = autocomplete.getPlace();
    if (place.geometry) {
      map.panTo(place.geometry.location);
      map.setZoom(13);
    }
    else {
      document.getElementById('searchPlace').placeholder = 'Enter a city';
    }
  }

  //Nearby place search by click

  placesService = new google.maps.places.PlacesService(map);
  
  document.getElementById("accommodation").addEventListener("click", function() {
    placeType = ['lodging'];
    clearMarkers();
    searchPlaces();
  });

  document.getElementById("restaurant").addEventListener("click", function() {
    placeType = ['restaurant', 'bar'];
    clearMarkers();
    searchPlaces();
  });

  document.getElementById("attraction").addEventListener("click", function() {
    placeType = ['night_club', 'zoo', 'museum', 'amusement_park', 'park'];
    clearMarkers();
    searchPlaces();
  });

  document.getElementById("store").addEventListener("click", function() {
    placeType = ['store', 'shopping_mall'];
    clearMarkers();
    searchPlaces();
  });

  //Sets the info window in the place details html element

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });
}

//Search places

function searchPlaces() {
  let search = {
    bounds: map.getBounds(),
    types: placeType
  };
  placesService.nearbySearch(search, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {

      //Clear markers
      clearMarkers();

      //Create markers
      for (let i = 0; i < results.length; i++) {
        markers[i] = new google.maps.Marker({
          position: results[i].geometry.location,
          animation: google.maps.Animation.DROP
        });
        markers[i].placeResult = results[i];
        google.maps.event.addListener(markers[i], 'click', showInfoWindow); //Show info window when user clicks on a marker

        //google.maps.event.addListener(markers[i], 'click', showInfoWindow); Show info window when user clicks on a marker
        setTimeout(dropMarker(i), i * 100);
      }

    }
  });
}

//Add markers to map

function dropMarker(i) {
  return function() {
    markers[i].setMap(map);
  };
}

//Clear markers
function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    if (markers[i]) {
      markers[i].setMap(null);
    }
  }
  markers = [];
}

// Get the place details for a place. Show the information in an info window,
// anchored on the marker for the place that the user selected.
function showInfoWindow() {
  let marker = this;
  placesService.getDetails({ placeId: marker.placeResult.place_id },
    function(place, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
      }
      infoWindow.open(map, marker);
      renderPlaceDetails(place);
    });
}

// Load the place information into the HTML elements used by the info window.
function renderPlaceDetails(place) {
  document.getElementById('place-name').textContent = place.name;
  document.getElementById('place-address').textContent = place.formatted_address;

  if (place.formatted_phone_number) {
    document.getElementById('place-phoneNumber').textContent = place.formatted_phone_number;
  }
  else {
    document.getElementById('place-phoneNumber').textContent = 'Not available';
  }
 

  // Assign a five-star rating to the place, using a black star ('&#10029;')
  // to indicate the rating the place has earned, and a white star ('&#10025;')
  // for the rating points not achieved.
  if (place.rating) {
    let ratingHtml = '';
    for (let i = 0; i < 5; i++) {
      if (place.rating < (i + 0.5)) {
        ratingHtml += '&#10025;';
      }
      else {
        ratingHtml += '&#10029;';
      }
      document.getElementById('place-rating-wrapper').style.display = '';
      document.getElementById('place-rating').innerHTML = ratingHtml;
    }
  }
  else {
    document.getElementById('place-rating-wrapper').style.display = 'none';
  }

  //This creates a link to the website

  if (place.website) {
    document.getElementById('place-website-wrapper').style.display = '';
    document.getElementById('place-website').innerHTML = '<a class= "btn btn-red" href="' + place.website + '" target="_blank">' + 'Website ' + '</a>';
  }
  else {
    document.getElementById('place-website-wrapper').style.display = 'none';
  }
}
