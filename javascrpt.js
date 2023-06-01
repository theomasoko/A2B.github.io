   // Initialize and display the map
   function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 0, lng: 0},
      zoom: 2
    });
    
    // Add a click event listener to the map
    map.addListener('click', function(event) {
      placeMarker(event.latLng); // Call placeMarker function passing the clicked location
    });
    
    // Place a marker on the clicked location
    function placeMarker(location) {
      if (marker) {
        marker.setMap(null); // Remove existing marker
      }
      
      marker = new google.maps.Marker({
        position: location,
        map: map
      });
      
      // Store the selected location's latitude and longitude
      var latitude = location.lat();
      var longitude = location.lng();
      
      // Use the selected latitude and longitude for further processing
      console.log('Latitude: ' + latitude);
      console.log('Longitude: ' + longitude);
    }
  }
