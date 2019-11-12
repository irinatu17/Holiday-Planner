//Global Variables---------------------------------
var map;
var infoWindow;
var placesService;
var markers = [];
var ireland = { lat: 53.2, lng: -9.0 };
var autocomplete;
var placeType;
var places;
var hostnameRegexp = new RegExp('^https?://.+?/');



//Initialize Map------------------------------------
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: ireland,
    zoom: 2
  });
  // Info window with place details
  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('place-details')
  });


  autocomplete = new google.maps.places.Autocomplete(
    (
      document.getElementById('searchPlace')), {
      types: ['(cities)'],
    });

  autocomplete.addListener('place_changed', onPlaceChanged);

  //Place search---------------------------------------
  function onPlaceChanged() {
    var place = autocomplete.getPlace();
    if (place.geometry) {
      map.panTo(place.geometry.location);
      map.setZoom(13);
    }
    else {
      document.getElementById('searchPlace').placeholder = 'Where are you going?';
    }
  }
  //Nearby establishment search by click---------------------------
  placesService = new google.maps.places.PlacesService(map);
  
 //document.getElementsByClassName('placeType').addEventListener('click', function(event){
  google.maps.event.addListener(map, 'click', function(event) {

    //This checks to see if a place type has been selected----------------
    if ($('button').hasClass('active')) {
      map.panTo(event.latLng);
      map.setZoom(13);
      clearMarkers();
      filterResults(); //Runs filterResults----------—
    }
    else {
      /*If a place type has not been selected then
      this shows a pop up that instructs user to select a place type*/
      //$('#selectType').show();
      document.getElementById('selectType').style.display = '';
      setTimeout(function() {
                $('#selectType').hide();
            }, 2500);

}
  });

  //Sets the info window in the place details html element------------------------------
  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });
}
//Filter results----------------------------------------------

function filterResults() {

  /*This checks which place type is selected
  before running the search places function*/

  if ($('#accommodation').hasClass('active')) {
    placeType = ['lodging'];
  }
  else if ($('#restaurant').hasClass('active')) {
    placeType = ['restaurant', 'bar'];
  }
  else if ($('#attraction').hasClass('active')) {
    placeType = ['night_club', 'zoo', 'museum', 'amusement_park', 'park'];
  }
  else if ($('#store').hasClass('active')) {
    placeType = ['store', 'shopping_mall'];
  }
  //Runs searchPlaces function------------------------------------------
  searchPlaces();
}


//Search places---------------------------------------------------------
function searchPlaces() {
  var search = {
    bounds: map.getBounds(),
    types: placeType
  };
  placesService.nearbySearch(search, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      //Clear markers---------------------------------------------------
      clearMarkers();
      //Create markers----------------------------------------------------
      for (var i = 0; i < results.length; i++) {
        markers[i] = new google.maps.Marker({
          position: results[i].geometry.location,
          animation: google.maps.Animation.DROP
        });
        markers[i].placeResult = results[i];
         google.maps.event.addListener(markers[i], 'click', showInfoWindow); //Show info window when user clicks on a marker---
        //google.maps.event.addListener(markers[i], 'click', showInfoWindow); Show info window when user clicks on a marker---
        setTimeout(dropMarker(i), i * 100);
      }

    }
  });
}
//Add markers to map----------------------------
function dropMarker(i) {
  return function() {
    markers[i].setMap(map);
  };
}

//Clear markers---------------------------------
function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    if (markers[i]) {
      markers[i].setMap(null);
    }
  }
  markers = [];
}
// Get the place details for a hotel. Show the information in an info window,
// anchored on the marker for the hotel that the user selected.
function showInfoWindow() {
  var marker = this;
  placesService.getDetails({ placeId: marker.placeResult.place_id },
    function(place, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
      }
      infoWindow.open(map, marker);
      buildIWContent(place);
    });
}

// Load the place information into the HTML elements used by the info window.
function buildIWContent(place) {
  document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
    'src="' + place.icon + '"/>';
  document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
    '">' + place.name + '</a></b>';
  document.getElementById('iw-address').textContent = place.vicinity;

  if (place.formatted_phone_number) {
    document.getElementById('iw-phone-row').style.display = '';
    document.getElementById('iw-phone').textContent =
      place.formatted_phone_number;
  }
  else {
    document.getElementById('iw-phone-row').style.display = 'none';
  }

  // Assign a five-star rating to the hotel, using a black star ('&#10029;')
  // to indicate the rating the hotel has earned, and a white star ('&#10025;')
  // for the rating points not achieved.
  if (place.rating) {
    var ratingHtml = '';
    for (var i = 0; i < 5; i++) {
      if (place.rating < (i + 0.5)) {
        ratingHtml += '&#10025;';
      }
      else {
        ratingHtml += '&#10029;';
      }
      document.getElementById('iw-rating-row').style.display = '';
      document.getElementById('iw-rating').innerHTML = ratingHtml;
    }
  }
  else {
    document.getElementById('iw-rating-row').style.display = 'none';
  }

  // The regexp isolates the first part of the URL (domain plus subdomain)
  // to give a short URL for displaying in the info window.
  if (place.website) {
    var fullUrl = place.website;
    var website = hostnameRegexp.exec(place.website);
    if (website === null) {
      website = 'http://' + place.website + '/';
      fullUrl = website;
    }
    document.getElementById('iw-website-row').style.display = '';
    document.getElementById('iw-website').textContent = website;
  }
  else {
    document.getElementById('iw-website-row').style.display = 'none';
  }
}
