
      function initMap() {
        var map = new google.maps.Map(document.getElementById('mymap'), {
          zoom: 13,
          center: {lat: 52.6298, lng: -1.1394}
        });

        marker = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {lat: 52.6298, lng: -1.1394}
        });
        marker.addListener('click', toggleBounce);
      }
	     // The following api creates a marker to DMU, using a DROP
      // animation. Clicking on the marker will toggle the animation between a BOUNCE


      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
		// these set different markers you want to show on your map
  var markerpdmu = new google.maps.Marker({
    position: dmu,
    map: map,
    title: 'my university'
 
  });
}
      
	  
